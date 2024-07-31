import React from "react";

const Select = () => {
    const [select, setSelect] = React.useState("");
    return (
        <form>
            <select
                value={select}
                onChange={({ target }) => setSelect(target.value)}
            >
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="trablet">Tablet</option>
            </select>
        </form>
    );
};

export default Select;
