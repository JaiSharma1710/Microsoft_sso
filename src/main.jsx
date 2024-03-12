import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./auth-config.js";

const maslInstance = new PublicClientApplication(msalConfig);

if (
  !maslInstance.getActiveAccount() &&
  maslInstance.getAllAccounts().length > 0
) {
  maslInstance.setActiveAccount(maslInstance.getActiveAccount()[0]);
}

maslInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    maslInstance.setActiveAccount(account);
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App instance={maslInstance} />
  </React.StrictMode>
);
