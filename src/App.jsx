/* eslint-disable react/prop-types */
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./auth-config";
import "./App.css";

function WrapperView() {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirection = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => instance.logout();

  return (
    <div className="App">
      <AuthenticatedTemplate>
        {activeAccount ? (
          <div>
            <p>SuccessFull</p>
            <button style={{ marginTop: "20px" }} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirection}>Sign In</button>
      </UnauthenticatedTemplate>
    </div>
  );
}

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrapperView />
    </MsalProvider>
  );
};

export default App;
