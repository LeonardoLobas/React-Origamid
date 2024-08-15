import React from "react";

const ComponenteInput = ({ id, label, onChange, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} onChange={onChange} {...props} />
        </>
    );
};

export default ComponenteInput;
