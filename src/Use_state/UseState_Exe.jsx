import React from "react";
import ProdUseState_Exe from "./prodUseState_Exe";

const UseState_Exe = () => {
    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);
    async function handleClick(event) {
        setCarregando(true);
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
        );
        const json = await response.json();
        setCarregando(false);
        setDados(json);
    }

    return (
        <>
            <button onClick={handleClick}>Notebook</button>
            <button style={{ margin: "5px" }} onClick={handleClick}>
                Tablet
            </button>
            <button onClick={handleClick}>Smartphone</button>
            {carregando && <p>Carregando...</p>}
            {!carregando && dados && <ProdUseState_Exe dados={dados} />}
        </>
    );
};

export default UseState_Exe;
