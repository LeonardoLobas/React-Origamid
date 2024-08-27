import React from "react";
import Slide from "./slide";
// import "./App.css";
const Principal = () => {
    const slides = [
        {
            id: "slide1",
            text: "Slide1",
        },
        {
            id: "slide2",
            text: "Slide2",
        },
        {
            id: "slide3",
            text: "Slide3",
        },
    ];
    return (
        <div>
            <Slide slides={slides} />
        </div>
    );
};

export default Principal;
