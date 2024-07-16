import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Aplicativo_projeto/App.jsx";
import Hooks from "./Use_state/hooks.jsx";
import UseState_Exe from "./Use_state/UseState_Exe.jsx";
import Use_Effect from "./Use_Effect/Use_Effect.jsx";
import Use_Ref from "./Use_Ref/Use_Ref.jsx";
import Use_Memo from "./Use_memo/use_callback/use_memo.jsx";
import Use_Context from "./Use_Context/use_Context.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Hooks />);
// ReactDOM.createRoot(document.getElementById("root")).render(<UseState_Exe />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Use_Effect />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Use_Ref />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Use_Memo />);
ReactDOM.createRoot(document.getElementById("root")).render(<Use_Context />);
