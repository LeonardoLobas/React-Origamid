import React from "react";
import Inputs from "./inputs";
import useValidations from "./validations";

const App = () => {
    const cep = useValidations("cep");
    const email = useValidations("email");

    const typesInputs = [
        {
            label: "Cep",
            id: "cep",
            type: "text",
            placeholder: "00000-000",
            typeValidation: cep,
        },
        {
            label: "Email",
            id: "email",
            type: "text",
            placeholder: "teste@teste.com.br",
            typeValidation: email,
        },
    ];
    function handleSubmit(event) {
        event.preventDefault();
        if (cep.validate()) {
            console.log("Enviar cep");
        } else {
            console.log("Cep errado");
        }

        if (email.validate()) {
            console.log("Eviou");
        } else {
            console.log("Não enviou");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {typesInputs.map((input) => (
                    <Inputs
                        key={input.id}
                        label={input.label}
                        id={input.id}
                        type={input.type}
                        placeHolder={input.placeholder}
                        {...input.typeValidation}
                    />
                ))}
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default App;
