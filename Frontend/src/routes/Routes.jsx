import { Route, Routes } from "react-router-dom";
import { GovtDashboard } from "../components/GovtDashboard";
import Login from "../components/Login";

export default function Links() {
    return (
        <Routes>
            <Route path="/govt" exact element={<GovtDashboard/> } />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
