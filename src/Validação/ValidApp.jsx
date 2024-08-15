import React from "react";
import ComponenteInput from "../Input/componenteInput";

const ValidApp = () => {
    const [cep, setCep] = React.useState("");
    const [error, setError] = React.useState(null);

    function validateCep(value) {
        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (!/^\d{5}-\d{3}$/.test(value)) {
            setError("Preencha um CEP válido");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function hundleBlur({ target }) {
        validateCep(target.value);
    }

    function handleChange({ target }) {
        if (error) validateCep(target.value);
        setCep(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateCep(cep)) {
            console.log("enviou");
        } else {
            console.log("não enviou");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ComponenteInput
                label="CEP"
                id="cep"
                type="text"
                value={cep}
                onChange={handleChange}
                onBlur={hundleBlur}
                placeholder="00000-000"
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    );
};

export default ValidApp;
