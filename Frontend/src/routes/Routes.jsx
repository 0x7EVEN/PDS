import { Route, Routes } from "react-router-dom";
import Test from "../components/Test";

export default function Links() {
    return (
        <Routes>
            <Route path="/" exact element={<Test />} />
        </Routes>
    );
}
