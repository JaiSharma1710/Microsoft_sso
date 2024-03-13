/* eslint-disable react/prop-types */
import { UnauthenticatedTemplate } from "@azure/msal-react";

const SignIn = ({ handleLoginPopup, handleLoginRedirect }) => {
  return (
    <UnauthenticatedTemplate>
      <p>Welcome To Microsoft Login</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleLoginPopup}>Sign In With Popup</button>
        <button onClick={handleLoginRedirect}>Sign In With Redirect</button>
      </div>
    </UnauthenticatedTemplate>
  );
};

export default SignIn;
