import React from "react";

const Inputs = ({
    id,
    label,
    value,
    type,
    onChange,
    error,
    onBlur,
    placeHolder,
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeHolder}
            />
            {error && <p>{error}</p>}
        </>
    );
};

export default Inputs;
