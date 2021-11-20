import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

export default function Links() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
