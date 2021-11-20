import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContestProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const Cont = styled.div`
    .App {
        font-family: sans-serif;
        text-align: center;
        margin-top: 100px;
    }

    .table-head {
        background-color: #3b49df;
        color: white;
        font-weight: 700;
        border: 1px solid black;
    }

    .table-head > div {
        border: 1px solid black;
    }

    .table-items > div:nth-child(even) {
        background-color: #3b49df24;
    }

    button {
        border-radius: 5px;
    }

    button:hover {
        background: #323ebe;
    }

    .text-start > h1 {
        text-align: center;
    }

    .padding-y-5 {
        padding-top: 5%;
        padding: 30px;
    }

    .blue-button {
        border: none;
        background-color: #4749ef;
        color: white;
        padding: 10px 20px;
    }

    .color-theme {
        color: #4749ef;
        font-weight: 700;
        padding-top: 10px;
    }
    .sub-ware {
        /* width: 25%; */
        height: 200px;
        width: 200px;
        border: 1px solid black;
    }

    .warehouse {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }

    .filler {
        /* border: 1px solid black; */
        height: 200px;
    }

    .border-black {
        border: 1px solid black;
    }
`;

export default function Cart() {
    const { cart, token, store } = useContext(AuthContext);

    const handlePurchase = () => {
        const item = {
            cart: {},
            store: "",
        };

        cart.map((el) => {
            item["store"] = el["store"];
            item["cart"][el["name"]] = el["quantity"] + "kg";
        });

        axios
            .post(
                "http://localhost:8080/user/checkout",
                {
                    cart: item,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((el) => {
                console.log(el.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <Cont>
            <div className="App">
                <div className="container border">
                    <div className="row text-start padding-y-5">
                        <h1>Cart</h1>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col-12">
                            <div className="row table-head">
                                <div className="col-4 py-2">Prodcut Name</div>
                                <div className="col-4 py-2">Store Name</div>
                                <div className="col-2 py-2">Quantity</div>
                                <div className="col-2 py-2">Price</div>
                            </div>
                        </div>
                        <div className="col-12 table-items">
                            {cart.map((e) => {
                                const [{ name }] = store.filter(
                                    (el) => e.store === el._id
                                );

                                return (
                                    <div className="row">
                                        <div className="col-4 py-2 border">
                                            {e.name.charAt(0).toUpperCase() +
                                                e.name.substr(1).toLowerCase()}
                                        </div>
                                        <div className="col-4 py-2 border">
                                            {name}
                                        </div>
                                        <div className="col-2 py-2 border">
                                            {e.quantity}
                                        </div>
                                        <div className="col-2 py-2 border">
                                            {e.price}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="row padding-y-5">
                        <div className="col-4">
                            {/* <div className=""></div> */}
                            <h4 className="color-theme">
                                Total Price :{" "}
                                {cart.reduce((a, b) => a.price + b.price)}
                            </h4>
                        </div>
                        <div className="offset-4 col-4">
                            {/* <Link to="/success"> */}
                            <button
                                onClick={handlePurchase}
                                className="blue-button"
                            >
                                Purchase
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </Cont>
    );
}
