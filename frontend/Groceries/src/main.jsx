import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GroceryContextProvider } from "./context/GroceryContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <GroceryContextProvider>
          <App />
        </GroceryContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
)
