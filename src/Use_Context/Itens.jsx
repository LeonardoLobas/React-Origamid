import React from "react";
import { Global_Context } from "./Global_Context";

const Itens = () => {
    const global = React.useContext(Global_Context);

    if (global.dados === null) return null;
    return (
        <>
            <div>
                Produto:{" "}
                {global.dados.map((produto) => (
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </div>
        </>
    );
};

export default Itens;
