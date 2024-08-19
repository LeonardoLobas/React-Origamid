import React from "react";

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: "Ceo inválido",
    },
};

const Validations = (type) => {
    const [value, setValue] = React.useState("");
};

export default Validations;
