/* eslint-disable react/prop-types */
import { UnauthenticatedTemplate } from "@azure/msal-react";

const SignIn = ({ handleLoginPopup, handleLoginRedirect }) => {
  return (
    <UnauthenticatedTemplate>
      <img
        src="https://cdn.universityliving.com/files/1710331469782microsoftlogo.png"
        style={{ width: "10rem", height: "auto" }}
      />
      <p>Welcome To Microsoft Login</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleLoginPopup}>Sign In With Popup</button>
        <button onClick={handleLoginRedirect}>Sign In With Redirect</button>
      </div>
    </UnauthenticatedTemplate>
  );
};

export default SignIn;
