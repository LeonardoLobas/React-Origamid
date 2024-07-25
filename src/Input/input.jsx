import React from "react";
const Input = () => {
    const [nome, setNome] = React.useState(" ");
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <button>Enviar</button>
            <p>{nome}</p>
        </form>
    );
};

export default Input;
