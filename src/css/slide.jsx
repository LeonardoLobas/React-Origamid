import React from "react";

const Slide = ({ slides }) => {
    return (
        <div>
            {slides.map((slide) => (
                <div key={slide.id}>
                    <h2>{slide.text}</h2>
                </div>
            ))}
        </div>
    );
};

export default Slide;
