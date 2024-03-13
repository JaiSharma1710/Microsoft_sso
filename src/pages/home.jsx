/* eslint-disable react/prop-types */
import { AuthenticatedTemplate } from "@azure/msal-react";

const Home = ({ handleLogoutRedirect, handleLogoutPopup, activeAccount }) => {
  return (
    <AuthenticatedTemplate>
      {activeAccount ? (
        <div>
          <p>Login SuccessFull</p>
          <p>Welcome, {activeAccount.name}</p>
          <p>Email: {activeAccount.username}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={handleLogoutPopup}>Logout With Popup</button>
            <button onClick={handleLogoutRedirect}>Logout With Redirect</button>
          </div>
        </div>
      ) : null}
    </AuthenticatedTemplate>
  );
};

export default Home;
