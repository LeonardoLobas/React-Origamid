import React from "react";

const useFetch = () => {
    const [dados, setDados] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    async function request(url, options) {
        setLoading(true);
        const response = await fetch(url, options);
        const json = await response.json();
        setDados(json);
        setLoading(false);
    }
    return { dados, error, loading, request };
};

export default useFetch;
