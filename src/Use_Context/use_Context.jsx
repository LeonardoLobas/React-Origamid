import React from "react";
import { GlobalStorage } from "./Global_Context";
import Itens from "./Itens";

const Use_Context = () => {
    return (
        <GlobalStorage>
            <Itens />
        </GlobalStorage>
    );
};

export default Use_Context;
