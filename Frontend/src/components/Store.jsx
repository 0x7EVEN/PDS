import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

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
        border: 1px solid #dddddd;
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

export default function Store() {
    const obj = useParams();

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
                <tr>
                    <td>
                        {" "}
                        <img
                            src="https://img.etimg.com/thumb/width-640,height-480,imgsize-263761,resizemode-1,msid-74742498/news/economy/agriculture/rice-export-from-india-to-ride-rabi-harvest-global-price/rice-agencies.jpg"
                            alt=""
                        />
                        <br />
                        Rice
                    </td>
                    <td>Available</td>
                    <td>
                        <input min={0} type="number" />{" "}
                    </td>
                    <td>XYZ RS</td>
                    <td>
                        <button>Add</button>
                    </td>
                </tr>
            </table>
        </Cont>
    );
}
