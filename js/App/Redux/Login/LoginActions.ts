import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  userAuthRequest: ["userName", "password"],
  userAuthSuccess: ["userName", "details"],
  userAuthFailure: ["error"],
  userLogout: null,
  setUserName: ["userName"],
  setPassword: ["password"],
  userListRequest: null,
  userListSuccess: ["userList"],
  userListFailure: ["error"]
});

export const AuthTypes = Types;
export default Creators;
