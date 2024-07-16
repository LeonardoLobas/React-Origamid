import React from "react";
import { Global_Context } from "./Global_Context";

const Itens = () => {
    const global = React.useContext(Global_Context);

    function handleClick() {
        global.setCarrinho((carrinho) => carrinho + 1);
    }
    return (
        <p>
            Total: {global.carrinho}:{" "}
            <button onClick={handleClick}>Adicionar</button>
        </p>
    );
};

export default Itens;
