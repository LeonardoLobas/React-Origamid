import React from "react";

const Hooks = () => {
    const [ativo, setAtivo] = React.useState(false);
    const [nome, setNome] = React.useState("");

    return (
        <>
            <button onClick={() => setAtivo(!ativo)}>
                {ativo ? "Ativo" : "Inativo"}
            </button>

            <input
                placeholder="insira o nome"
                onChange={(e) => setNome(e.target.value)}
            />

            <h1>{nome}</h1>
        </>
    );
};

export default Hooks;
