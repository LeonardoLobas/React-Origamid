import React from "react";
import ComponentesSelect from "./componentesSelect";
// const Select = () => {
//     const [select, setSelect] = React.useState("");
//     return (
//         <form>
//             <select
//                 value={select}
//                 onChange={({ target }) => setSelect(target.value)}
//             >
//                 <option disabled value=""></option>
//                 <option value="notebook">Notebook</option>
//                 <option value="smartphone">Smartphone</option>
//                 <option value="trablet">Tablet</option>
//             </select>
//             {select}
//         </form>
//     );
// };

const Select = () => {
    const [produto, setProduto] = React.useState("");
    return (
        <form>
            <ComponentesSelect
                options={["Notebook", "Smartphone", "Tablet"]}
                value={produto}
                setValue={setProduto}
            />
        </form>
    );
};

export default Select;
