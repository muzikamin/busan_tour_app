import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import _theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <Header />
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);
