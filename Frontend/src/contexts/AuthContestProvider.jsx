import { createContext, useState } from "react";
import { saveData, loadData, removeItem } from "../utils/localStorage";

export const AuthContext = createContext({
    handleLogin: () => {},
    handleLogout: () => {},
    handleCart: () => {},
    storeAdd: () => {},
    token: "",
    user: {},
    cart: [],
    store: [],
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(loadData("user") || undefined);
    const [token, setToken] = useState(loadData("token") || "");
    const [cart, setCart] = useState(loadData("cart") || []);
    const [store, setStore] = useState(loadData("store") || []);

    const handleLogout = () => {
        removeItem("user");
        removeItem("token");
        removeItem("cart");
        removeItem("store");
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

    const storeAdd = (item) => {
        saveData("store", item);
        setStore(item);
    };

    const value = {
        token: token,
        user: user,
        handleLogin,
        handleLogout,
        cart,
        handleCart,
        storeAdd,
        store,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
