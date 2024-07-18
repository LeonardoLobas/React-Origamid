import React from "react";

export const Global_Context = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        const api = fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((response) => response.json())
            .then((json) => {
                setDados(json);
                console.log(json);
            });
    }, []);

    function limparDados() {
        setDados(null);
    }

    return (
        <Global_Context.Provider value={{ limparDados, dados, setDados }}>
            {children}
        </Global_Context.Provider>
    );
};

export const useGlobalStorage = () => {
    const context = React.useContext(Global_Context);
    if (!context) return;
    return context;
};
