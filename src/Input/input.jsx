import React from "react";
import ComponenteInput from "./componenteInput";

const Input = () => {
    const [nome, setNome] = React.useState("");
    return (
        <form>
            <ComponenteInput
                label="Nome"
                id="nome"
                type="text"
                value={nome}
                setValue={setNome}
            />
        </form>
    );
};

export default Input;

// const formFields = [
//     {
//         id: "nome",
//         label: "Nome",
//         type: "text",
//     },
//     {
//         id: "email",
//         label: "Email",
//         type: "email",
//     },
//     {
//         id: "senha",
//         label: "Senha",
//         type: "password",
//     },
//     {
//         id: "cep",
//         label: "Cep",
//         type: "text",
//     },
//     {
//         id: "rua",
//         label: "Rua",
//         type: "text",
//     },
//     {
//         id: "numero",
//         label: "Numero",
//         type: "text",
//     },
//     {
//         id: "bairro",
//         label: "Bairro",
//         type: "text",
//     },
//     {
//         id: "cidade",
//         label: "Cidade",
//         type: "text",
//     },
//     {
//         id: "estado",
//         label: "Estado",
//         type: "text",
//     },
// ];

// const Input = () => {
//     const [form, setForm] = React.useState(
//         formFields.reduce((acc, field) => {
//             return { ...acc, [field.id]: "" };
//         }, {})
//     );

//     const [response, setResponse] = React.useState(null);

//     function handleSubmit(event) {
//         event.preventDefault();
//         fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(form),
//         }).then((response) => {
//             setResponse(response);
//             console.log(response);
//         });
//     }

//     function handleChange({ target }) {
//         const { id, value } = target;
//         setForm({ ...form, [id]: value });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             {formFields.map(({ id, label, type }) => (
//                 <div key={id}>
//                     <label htmlFor={id}>{label}</label>
//                     <input
//                         type={type}
//                         id={id}
//                         value={form[id]}
//                         onChange={handleChange}
//                     />
//                 </div>
//             ))}
//             <button>Enviar</button>
//             {response && response.ok && <p>Usuário Criado</p>}
//         </form>
//     );
// };

// export default Input;
