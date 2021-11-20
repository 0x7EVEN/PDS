import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContestProvider";
import { Slideshow } from "./Slideshow";

const Container = styled.div`
    padding-top: 50px;
    background-color: #f0f2f5;
    padding-bottom: 50px;

    h1 {
        text-align: center;
        margin: 30px 0px 20px 0px;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .month-cost {
        text-align: center;

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 60%;
            margin: auto;
        }

        td,
        th {
            border: 1px solid black;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #3b49df;
            color: white;
            font-size: 1rem;
            text-align: center;
        }

        tr:nth-child(even) {
            background-color: #3b49df24;
        }
    }

    .store-items {
        display: grid;
        margin: auto;
        gap: 5px;
    }

    .stores {
        text-align: center;
        width: 30%;
        margin: auto;
        margin-top: 70px;
    }

    .store {
        display: inline-flex;
        padding: 5px 20px;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.75);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        backdrop-filter: blur(5px);
    }

    .store > h3,
    .store > button {
        margin: 10px 30px;
    }

    button {
        font-size: 1rem;
        white-space: nowrap;
        margin-right: 8px;
        padding: 8px 16px;
        border-radius: 0.375rem;
        background-color: #3b49df;
        color: white;
        font-weight: 500;
        line-height: 1.5rem;
        border: none;
        cursor: pointer;
        font-weight: 600;
        height: 40px;
    }

    button:hover {
        background-color: #323ebe;
    }
`;

export default function Dashboard() {
    const [stores, setStores] = useState([]);
    const { token, storeAdd } = useContext(AuthContext);
    const [quota, setQuota] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/user/nearby", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setStores(res.data.stores);
                storeAdd(res.data.stores);
            });

        axios
            .get("http://localhost:8080/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setQuota(res.data.user.quota);
            });
    }, [token]);

    return (
        <Container>
            <h1 className="head">PUBLIC DISTRIBUTION SYSTEM</h1>
            {Slideshow()}
            <div className="month-cost">
                <h1>Ration Cost for the Month</h1>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Remaining Quantity</th>
                        <th>Price/KG</th>
                    </tr>
                    {quota.map((el) => (
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.remaining} / 30kg</td>
                            <td>{el.price}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div className="stores">
                <h1>Nearby Stores</h1>
                <div className="store-items">
                    {stores.map((el) => (
                        <div key={el._id} className="store">
                            <h3>{el.name}</h3>
                            <Link to={`/store/${el._id}`}>
                                <button>Visit</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
