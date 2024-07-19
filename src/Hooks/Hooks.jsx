import React from "react";
import useLocalStorage from "./useLocalStorage";

const Hooks_context = () => {
    const [produto, setProduto] = useLocalStorage("produto", "");

    function handleClick({ target }) {
        setProduto(target.innerText);
    }

    return (
        <div>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Celular</button>
        </div>
    );
};

export default Hooks_context;
