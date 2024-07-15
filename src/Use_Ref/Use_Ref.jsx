import React from "react";

// Use_ref exercicios. testes

const Use_Ref = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setnotificacao] = React.useState(null);
    const timeoutRef = React.useRef();

    function handleClick() {
        setCarrinho(carrinho + 1);
        setnotificacao("Item adicionado ao carrinho");

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setnotificacao(null);
        }, 2000);
    }

    return (
        <div>
            <h3>{notificacao}</h3>
            <button onClick={handleClick}>
                Adicionar Carrinho {carrinho}{" "}
            </button>
        </div>
    );
};

export default Use_Ref;
