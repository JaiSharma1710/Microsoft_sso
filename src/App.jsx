/* eslint-disable react/prop-types */
import { MsalProvider } from "@azure/msal-react";

import Main from "./pages";

import "./App.css";

const App = ({ maslInstance }) => {
  return (
    <MsalProvider instance={maslInstance}>
      <Main />
    </MsalProvider>
  );
};

export default App;
