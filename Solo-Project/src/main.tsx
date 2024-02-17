//J Programming //
// MCX //

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
//import "./index.css";
import App from "./App";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <About />
{/*      <App /> */}
    </ChakraProvider>
  </React.StrictMode>
);
