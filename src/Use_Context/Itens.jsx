import React from "react";
import { Global_Context, useGlobalStorage } from "./Global_Context";

const Itens = () => {
    const global = React.useContext(Global_Context);
    const { dados } = useGlobalStorage();

    if (global.dados === null) return null;
    return (
        <>
            <div>Produto: {global.dados[0].nome}</div>;
            <ul>
                {Object.values(dados).map((produto) => (
                    <li key={produto.id}>
                        <h1>{produto.nome}</h1>
                        <p>{produto.preco}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Itens;
