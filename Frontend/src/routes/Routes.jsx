import { Route, Routes } from "react-router-dom";
import { GovtDashboard } from "../components/GovtDashboard";
import Cart from "../components/Cart";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Store from "../components/Store";
import Success from "../components/Success";

export default function Links() {
    return (
        <Routes>
            <Route path="/govt" exact element={<GovtDashboard/> } />
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/store/:id" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    );
}
