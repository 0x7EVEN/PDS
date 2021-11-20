import { createContext, useState } from "react";
import { saveData, loadData, removeItem } from "../utils/localStorage";

export const AuthContext = createContext({
    handleLogin: () => {},
    handleLogout: () => {},
    token: "",
    user: {},
    cart: [],
    handleCart: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(loadData("user") || undefined);
    const [token, setToken] = useState(loadData("token") || "");
    const [cart, setCart] = useState(loadData("cart") || []);

    const handleLogout = () => {
        removeItem("user");
        removeItem("token");
        removeItem("cart");
        setUser(undefined);
        setToken("");
    };

    const handleLogin = (user, token) => {
        setUser(user);
        setToken(token);
        saveData("token", token);
        saveData("user", user);
        saveData("cart", cart);
    };

    const handleCart = (item) => {
        saveData("cart", [...cart, item]);
        setCart([...cart, item]);
    };

    const value = {
        token: token,
        user: user,
        handleLogin,
        handleLogout,
        cart,
        handleCart,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
