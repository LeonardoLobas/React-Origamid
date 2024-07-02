import React from "react";

const ProdUseState_Exe = ({ dados }) => {
    console.log(dados);
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>{dados.valor}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
    );
};

export default ProdUseState_Exe;
