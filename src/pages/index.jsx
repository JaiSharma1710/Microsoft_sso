import useAuth from "../lib/useAuth";

import Home from "./home";
import SignIn from "./signIn";

const Main = () => {
  const {
    handleLoginPopup,
    handleLogoutRedirect,
    handleLogoutPopup,
    handleLoginRedirect,
    activeAccount,
  } = useAuth();

  return (
    <div className="App">
      <Home
        handleLogoutRedirect={handleLogoutRedirect}
        handleLogoutPopup={handleLogoutPopup}
        activeAccount={activeAccount}
      />
      <SignIn
        handleLoginRedirect={handleLoginRedirect}
        handleLoginPopup={handleLoginPopup}
      />
    </div>
  );
};

export default Main;
