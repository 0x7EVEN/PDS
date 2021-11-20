import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContestProvider";
import StoreItem from "./StoreItem";

const Cont = styled.div`
    padding-top: 70px;
    text-align: center;

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 60%;
        margin: auto;

        tr > td:nth-of-type(1) {
            font-weight: 700;
        }

        img {
            width: 80px;
        }

        button {
            font-size: 1rem;
            white-space: nowrap;
            margin-right: 8px;
            padding: 8px 16px;
            border-radius: 0.375rem;
            background-color: orange;
            color: white;
            font-weight: 500;
            line-height: 1.5rem;
            border: none;
            height: 40px;
            cursor: pointer;
        }

        button:hover {
            background-color: #ffbd41;
        }
    }

    td,
    th {
        border: 1px solid black;
        text-align: left;
        padding: 8px;
        text-align: center;

        input {
            width: 50px;
            font-size: 15px;
        }
    }

    th {
        background-color: black;
        color: white;
        font-size: 1rem;
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
`;

const initStore = {
    rice: 0,
    wheat: 0,
    jaggery: 0,
    oil: 0,
};

export default function Store() {
    const { id } = useParams();
    const [store, setStore] = useState({});
    const [form, setForm] = useState(initStore);
    const { user, handleCart } = useContext(AuthContext);
    let price = {
        rice: 1,
        wheat: 1,
        jaggery: 1,
        oil: 1,
    };

    user.quota.map((el) => {
        const name = el.name.toLowerCase();
        const value = Number(el.price.split("/kg")[0]);
        price = {
            ...price,
            [name]: value,
        };
        return el;
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name.toLowerCase()]: Number(value) });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/store/${id}`).then((res) => {
            setStore(res.data.store);
        });
    }, []);

    const handleAddToCart = (item) => {
        const cartItem = { store: id, ...item };
        handleCart(cartItem);
    };

    return (
        <Cont>
            <h1>Store Name</h1>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Availability</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Add to Cart</th>
                </tr>
                {store &&
                    store.inventory &&
                    store.inventory.map((el) => (
                        <StoreItem
                            el={el}
                            handleChange={handleChange}
                            form={form}
                            handleAddToCart={handleAddToCart}
                            price={price}
                            id={id}
                        />
                    ))}
            </table>
        </Cont>
    );
}
