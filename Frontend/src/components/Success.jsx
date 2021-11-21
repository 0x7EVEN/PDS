import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Cont = styled.div`
    margin: auto;
    text-align: center;
    margin-top: 200px;
    width: fit-content;
`;

export default function Success() {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFlag(true);
        }, 3000);
    }, []);

    if (flag) return <Navigate to="/" />;

    return (
        <Cont>
            <img
                src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif"
                alt=""
            />
        </Cont>
    );
}
