import React from "react";

const ComponenteRadio = ({ options, value, setValue, ...props }) => {
    return (
        <>
            {options.map((option) => (
                <label
                    key={option}
                    style={{
                        backgroundColor:
                            value === option ? option : "transparent",
                    }}
                >
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={({ target }) => setValue(target.value)}
                        {...props}
                    />
                    {option}
                </label>
            ))}
        </>
    );
};

export default ComponenteRadio;
