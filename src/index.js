import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
// import "./index.css";

//
import theme from "./Utils/theme";
import GlobalStyles from "./Utils/Global";

render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById("root")
);
