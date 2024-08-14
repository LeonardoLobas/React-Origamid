import React from "react";
import ComponenteRadio from "./componenteRadio";
// const Radio = () => {
//     const [produto, setProduto] = React.useState("");
//     const [cor, setCor] = React.useState("");

//     return (
//         <form>
//             <h2>Dispositivo</h2>
//             <label htmlFor="Notebook">
//                 <input
//                     name="produto"
//                     type="radio"
//                     value="Notebook"
//                     checked={produto === "Notebook"}
//                     onChange={({ target }) => setProduto(target.value)}
//                 />
//                 Notebook
//             </label>
//             <label htmlFor="Samrtphone">
//                 <input
//                     name="produto"
//                     type="radio"
//                     value="Smartphone"
//                     checked={produto === "Smartphone"}
//                     onChange={({ target }) => setProduto(target.value)}
//                 />
//                 Smartphone
//             </label>

//             <h2>Cor</h2>
//             <label htmlFor="Azul">
//                 <input
//                     name="cor"
//                     type="radio"
//                     value="Azul"
//                     checked={cor === "Azul"}
//                     onChange={({ target }) => setCor(target.value)}
//                 />
//                 Azul
//             </label>
//             <label htmlFor="Vermelho">
//                 <input
//                     name="cor"
//                     type="radio"
//                     value="Vermelho"
//                     checked={cor === "Vermelho"}
//                     onChange={({ target }) => setCor(target.value)}
//                 />
//                 Vermelho
//             </label>
//         </form>
//     );
// };

const Radio = () => {
    const [cor, setCor] = React.useState("");
    return (
        <ComponenteRadio
            options={["blue", "red"]}
            value={cor}
            setValue={setCor}
        />
    );
};

export default Radio;
