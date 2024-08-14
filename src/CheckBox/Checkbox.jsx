import React from "react";
import ComponenteCheckbox from "./ComponenteCheckbox";

// const Checkbox = () => {
//     const [cores, setCores] = React.useState([]);
//     const coresArray = [
//         "azul",
//         "roxo",
//         "laranja",
//         "verde",
//         "vermelho",
//         "cinza",
//     ];
//     function handleChange({ target }) {
//         if (target.checked) {
//             setCores([...cores, target.value]);
//         } else {
//             setCores(cores.filter((cor) => cor !== target.value));
//         }
//     }

//     function handleChecked(cor) {
//         return cores.includes(cor);
//     }

//     return (
//         <form>
//             {coresArray.map((cor) => (
//                 <label key={cor} style={{ textTransform: "capitalize" }}>
//                     <input
//                         type="checkbox"
//                         value={cor}
//                         checked={handleChecked(cor)}
//                         onChange={handleChange}
//                     />
//                     {cor}
//                 </label>
//             ))}
//             <ul>
//                 {cores.map((cor) => (
//                     <li key={cor}>{cor}</li>
//                 ))}
//             </ul>
//         </form>
//     );
// };

const Checkbox = () => {
    const [fruta, setFruta] = React.useState([]);
    const [termos, setTermos] = React.useState([]);

    return (
        <form>
            <h2>{fruta + " "}</h2>
            <ComponenteCheckbox
                options={["Uva", "Laranja", "Limão"]}
                value={fruta}
                setValue={setFruta}
            />

            {termos}
            <ComponenteCheckbox
                options={["Termos e Condições"]}
                value={termos}
                setValue={setTermos}
            />
        </form>
    );
};

export default Checkbox;
