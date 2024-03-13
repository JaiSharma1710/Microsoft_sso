import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../auth-config";

const useAuth = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleLoginPopup = () => {
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: "/",
      })
      .catch((error) => console.log(error));
  };

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutPopup = () => {
    instance
      .logoutPopup({
        mainWindowRedirectUri: "/", // redirects the top level app after logout
        account: instance.getActiveAccount(),
      })
      .catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };

  return {
    handleLoginPopup,
    handleLogoutRedirect,
    handleLogoutPopup,
    handleLoginRedirect,
    activeAccount,
  };
};

export default useAuth;
