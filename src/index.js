import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/auth-context";


const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
