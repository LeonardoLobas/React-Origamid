import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const Hooks_context = () => {
    const [produto, setProduto] = useLocalStorage("produto", "");
    const { request, dados, loading } = useFetch();

    React.useEffect(() => {
        request("https://ranekapi.origamid.dev/json/api/produto/");
    }, []);

    function handleClick({ target }) {
        setProduto(target.innerText);
    }

    if (loading) return <p>Carregando...</p>;

    if (dados)
        return (
            <div>
                <h3>Item escolhido: {produto} </h3>
                <button onClick={handleClick}>Notebook</button>
                <button onClick={handleClick}>Celular</button>

                {dados.map((produto) => (
                    <div key={produto.id}>
                        <h1>{produto.nome}</h1>
                    </div>
                ))}
            </div>
        );
    else null;
};

export default Hooks_context;
