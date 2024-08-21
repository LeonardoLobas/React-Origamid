import React from "react";
import styles from "./App.module.css";
const Principal = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>R$ 12000</p>
            <button className={styles.comprar}>Comprar</button>
        </div>
    );
};

export default Principal;
