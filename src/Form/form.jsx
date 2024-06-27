import React from "react";
import Input from "./Input";
import Button from "./button";

const Form = () => {
    return (
        <form>
            <p>
                <label htmlFor="nome">Nome</label>
                <Input />
            </p>
            <p>
                <label htmlFor="password">Senha</label>
                <Input />
            </p>
            <Button />
        </form>
    );
};

export default Form;
