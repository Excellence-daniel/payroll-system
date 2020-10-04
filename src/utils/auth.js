import { SYSTEMUSER, LOGGEDIN } from "./constants";

export const checkIfUserIsLoggedIn = () => {
  const user = localStorage.getItem(SYSTEMUSER);
  if (user) {
    return true;
  }
  return false;
};

export const serverUrl = () => {
  // const url = "http://localhost:4020";
  const url = "https://payroll-k-server.herokuapp.com";
  return url;
};

export const setAuth = (user) => {
  localStorage.setItem(SYSTEMUSER, JSON.stringify(user));
  localStorage.setItem(LOGGEDIN, true);
};
