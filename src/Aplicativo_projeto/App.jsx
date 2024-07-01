import React from "react";
import Header from "./header";
import Home from "./home";
import Produtos from "./produtos";

const App = () => {
    const { pathname } = window.location;
    console.log(pathname);

    let Component;
    if (pathname === "/produtos") {
        Component = Produtos;
    } else {
        Component = Home;
    }

    return (
        <section>
            <Header />
            <Component />
        </section>
    );
};

export default App;
