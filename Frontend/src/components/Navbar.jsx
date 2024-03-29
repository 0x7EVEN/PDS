import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { loadData, removeItem } from "../utils/localStorage";
import { AuthContext } from "../contexts/AuthContestProvider";

const Container = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 56px;
    width: 100%;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
    display: block;
    box-sizing: border-box;
    z-index: 999;

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .cont {
        margin: auto;
        display: flex;
        align-items: center;
        position: relative;
        height: 56px;
        max-width: 1260px;
        padding: 0 1rem;
    }

    .logo {
        max-width: 200px;
        display: inline-flex;
        align-self: stretch;
        flex-shrink: 0;
        align-items: center;
        vertical-align: middle;
        letter-spacing: -0px;

        div {
            display: inline-block;
            color: white;
            background-color: black;
            font-size: 1.25rem;
            font-weight: 700;
            width: 50px;
            height: 40px;
            border-radius: 3px;
            line-height: 37px;
            text-align: center;
            letter-spacing: -1px;
        }

        div:hover {
            background-color: #424242;
        }
    }

    .buttons {
        display: flex;
        margin-left: auto;
        height: 100%;
        align-items: center;
        margin-right: 14px;
    }

    .buttons > a {
        margin: 0px 10px;
    }

    .log {
        font-size: 1rem;
        white-space: nowrap;
        margin-right: 8px;
        padding: 8px 16px;
        border-radius: 0.375rem;
        background-color: #3b49df;
        color: white;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .log-name {
        font-size: 1rem;
        white-space: nowrap;
        margin-right: 8px;
        padding: 8px 16px;
        border-radius: 0.375rem;
        background-color: black;
        color: white;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .log-color {
        background-color: grey;
    }

    .logout {
        border: none;
        cursor: pointer;
        font-weight: 600;
    }

    .log:hover {
        background-color: #323ebe;
    }
`;

export default function Navbar() {
    const { user, handleLogout } = useContext(AuthContext);

    return (
        <Container>
            <div className="cont">
                <Link className="logo" to="/">
                    <div>PDS</div>
                </Link>

                <div className="buttons">
                    {user && (
                        <Link className="log-name" to="/cart">
                            {user.name}
                        </Link>
                    )}
                    {user && (
                        <span className="log-name log-color">
                            Wallet: ₹{user.wallet}
                        </span>
                    )}

                    <Link className="log" to="/cart">
                        Cart
                    </Link>
                    {!user ? (
                        <Link to="/login" className="log">
                            Log in
                        </Link>
                    ) : (
                        <span className="log logout" onClick={handleLogout}>
                            Log out
                        </span>
                    )}
                </div>
            </div>
        </Container>
    );
}
