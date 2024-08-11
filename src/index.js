import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import _theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={_theme}>
        <Router />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
