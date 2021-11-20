import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding-top: 70px;
    background-color: #f0f2f5;
    height: 100vh;

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
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
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
        margin-top: 100px;
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
        background-color: green;
        color: white;
        font-weight: 500;
        line-height: 1.5rem;
        border: none;
        cursor: pointer;
        font-weight: 600;
        height: 40px;
    }

    button:hover {
        background-color: #02a802;
    }
`;

export default function Dashboard() {
    return (
        <Container>
            <div className="month-cost">
                <h1>Ration Cost for the Month</h1>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Max Quantity</th>
                        <th>Price/KG</th>
                    </tr>
                    <tr>
                        <td>Rice</td>
                        <td>10 KG</td>
                        <td>₹50</td>
                    </tr>
                    <tr>
                        <td>Wheat</td>
                        <td>10 KG</td>
                        <td>₹50</td>
                    </tr>
                    <tr>
                        <td>Kerosene</td>
                        <td>10 KG</td>
                        <td>₹50</td>
                    </tr>
                </table>
            </div>

            <div className="stores">
                <h1>Nearby Stores</h1>
                <div className="store-items">
                    <div className="store">
                        <h3>STORE NAME 1</h3>
                        <Link to={`/store/store1`}>
                            <button>Visit</button>
                        </Link>
                    </div>
                    <div className="store">
                        <h3>STORE NAME 2</h3>
                        <Link to={`/store/store2`}>
                            <button>Visit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
