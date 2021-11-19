import { useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Container = styled.div`
    height: 525px;
    background-color: var(--white);
    padding-bottom: 60px;
    margin-top: 100px;

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .cont {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 40px;
        padding-right: 40px;
    }

    .cont2 {
        margin-left: auto;
        margin-right: auto;
        width: 420px;
        max-width: 100%;
        margin-top: 30px;
    }

    .heading {
        margin: 10px 0px 70px;
    }

    .heading > h2 {
        text-align: center;
        margin: 0 0 10px;
        font-weight: 600;
        font-size: 30px;
        line-height: 1.2em;
    }
`;

const Form = styled.form`
    .text-boxes {
        margin-bottom: 20px;
        position: relative;

        img {
            position: absolute;
            width: 35px;
            margin-left: 5px;
            margin-top: 3px;
        }
    }

    label {
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        margin-bottom: 8px;
    }

    .text-boxes > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
        box-sizing: border-box;
    }

    input:focus {
        border-color: #000;
    }

    .action-bottom {
        margin-top: 27px;
    }

    .action-bottom > p {
        margin-bottom: 1em;
        font-weight: 500;
        margin-block-start: 1em;
        margin-block-end: 1em;
    }

    .action-bottom > p > input,
    .action-bottom > p > button {
        font-weight: 700;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        background: #3b49df;
        font-size: 16px;
        line-height: 1em;
        height: auto;
        margin: 0;
        padding: 11px 25px;
        vertical-align: middle;
        text-align: center;
        color: white;
        transition: background-color 0.1s, color 0.1s, border-color 0.1s,
            opacity 0.1s;
        display: inline-block;
        border: none;
    }

    .action-bottom > p > input:hover,
    .action-bottom > p > button:hover {
        background: #323ebe;
    }
`;

function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

export default function Login() {
    const [validate, setValidate] = useState(false);
    const [random, setRandom] = useState("fh430948sdfsflj430zvn.jdfsk");
    const [text, setText] = useState("");
    const [otp, setOtp] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp === random) {
            //log-in successful
            setSuccess(true);
        } else {
            alert("Invalid OTP");
        }
    };

    const handleValidate = () => {
        //if aadhar number is legit, then proceed further
        setValidate(true);
        setLoading(true);
        setTimeout(() => {
            let temp = generateOTP();
            setRandom(temp);
            console.log("OTP of 6 digits: ", temp);
            setLoading(false);
        }, 1000);
    };

    if (success) return <Navigate to="/" />;

    return (
        <Container>
            <div className="cont">
                <div className="cont2">
                    <div className="heading">
                        <h2>Login</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="text-boxes">
                            <label htmlFor="user">Aadhaar Number</label>
                            <input
                                type="text"
                                id="user"
                                onChange={(e) => setText(e.target.value)}
                            />
                            {loading && (
                                <img
                                    src="http://mystiquevalley.com/images/loading.gif"
                                    alt=""
                                />
                            )}
                            {!loading && validate && (
                                <img
                                    src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
                                    alt=""
                                />
                            )}
                        </div>
                        {validate && (
                            <div className="text-boxes">
                                <label htmlFor="pass">OTP</label>
                                <input
                                    type="text"
                                    id="pass"
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                        )}

                        <div className="action-bottom">
                            <p>
                                {validate ? (
                                    <input type="submit" value="Sign in" />
                                ) : (
                                    <button onClick={handleValidate}>
                                        Validate
                                    </button>
                                )}
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    );
}
