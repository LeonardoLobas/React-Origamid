import React from "react";
import useFetch from "./useFetch";

const Hooks_context = () => {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        request("https://ranekapi.origamid.dev/json/api/produto/");
    }, [request]);

    if (error) return <p>{error}</p>;
    if (loading) return <p>Carregando...</p>;
    if (data)
        return (
            <div>
                {data.map((produto) => (
                    <p key={produto.id}>{produto.nome}</p>
                ))}
            </div>
        );
    else return null;
};

export default Hooks_context;
