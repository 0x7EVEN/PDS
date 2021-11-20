import { createContext, useState } from "react";
import { saveData, loadData, removeItem } from "../utils/localStorage";

export const AuthContext = createContext({
    handleLogin: () => {},
    handleLogout: () => {},
    token: "",
    user: {},
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(loadData("user") || undefined);
    const [token, setToken] = useState(loadData("token") || "");

    const handleLogout = () => {
        removeItem("user");
        removeItem("token");
        setUser(undefined);
        setToken("");
    };

    const handleLogin = (user, token) => {
        setUser(user);
        setToken(token);
        saveData("token", token);
        saveData("user", user);
    };

    const value = {
        token: token,
        user: user,
        handleLogin,
        handleLogout,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
