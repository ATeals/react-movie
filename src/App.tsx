import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { createGlobalStyle } from "styled-components";

import "@/styles/global.css";

const GlobalStyle = createGlobalStyle`
    body{
        background-color : ${(props) => props.theme.default.black};
        color: ${(props) => props.theme.default.white};
        width : 1000px;
        margin : auto;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
