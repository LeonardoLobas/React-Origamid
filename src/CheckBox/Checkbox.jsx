import React from "react";

const Checkbox = () => {
    const [cores, setCores] = React.useState([]);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    function handleChecked(cor) {
        return cores.includes(cor);
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value="azul"
                    checked={handleChecked("azul")}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value="vermelho"
                    checked={handleChecked("vermelho")}
                    onChange={handleChange}
                />
                Vermelho
            </label>
            <label>
                <input
                    type="checkbox"
                    value="verde"
                    checked={handleChecked("verde")}
                    onChange={handleChange}
                />
                Verde
            </label>
            <ul>
                {cores.map((cor) => (
                    <li key={cor}>{cor}</li>
                ))}
            </ul>
        </form>
    );
};

export default Checkbox;
