import React from "react";

export const Global_Context = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [carrinho, setCarrinho] = React.useState(0);
    return (
        <Global_Context.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </Global_Context.Provider>
    );
};
