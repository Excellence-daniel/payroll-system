import { SYSTEMUSER } from "./constants";

export const checkIfUserIsLoggedIn = () => {
  const user = localStorage.getItem(SYSTEMUSER);
  if (user) {
    console.log({ user });
    return true;
  }
  return false;
};
