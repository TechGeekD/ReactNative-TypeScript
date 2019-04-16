import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { Reducer } from "redux";
import { AuthTypes } from "./LoginActions";
import { LoginReducerType } from "./Types";

export const INITIAL_STATE = Immutable({
  userName: "",
  password: "",
  authed: false,
  userList: [],
  details: {},
  fetching: false,
  error: false
});

/* ------------- Reducers ------------- */

// request the avatar for a user
export const authRequest = (state, { userName, password }) =>
  state.merge({ fetching: true, error: false, userName, password });

// successful user lookup
export const authSuccess = (state, action) => {
  const { userName, details, authed = true } = action;
  return state.merge({
    fetching: false,
    error: false,
    userName,
    details,
    authed
  });
};

// failed to get the user
export const authFailure = state =>
  state.merge({ fetching: false, error: true, userName: "", password: "" });

// logut user
export const logout = state => {
  return state.replace({
    fetching: false,
    error: false,
    userName: "",
    password: "",
    authed: false,
    details: {},
    userList: state.userList
  });
};

// set username & password
export const setUserName = (state, action) => {
  const { userName } = action;
  return state.merge({ userName });
};

export const setPassword = (state, action) => {
  const { password } = action;
  return state.merge({ password });
};

export const userListRequest = state =>
  state.merge({ fetching: true, error: false });

export const userListSuccess = (state, action) => {
  const { userList } = action;
  return state.merge({ fetching: false, error: false, userList });
};

export const userListFailure = state =>
  state.merge({ fetching: false, error: true, userList: [] });

export const REHYDRATE = (state, action) => {
  return state.merge(action.payload.login);
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: Reducer<LoginReducerType> = createReducer(INITIAL_STATE, {
  [AuthTypes.USER_AUTH_REQUEST]: authRequest,
  [AuthTypes.USER_AUTH_SUCCESS]: authSuccess,
  [AuthTypes.USER_AUTH_FAILURE]: authFailure,
  [AuthTypes.USER_LOGOUT]: logout,
  [AuthTypes.SET_USER_NAME]: setUserName,
  [AuthTypes.SET_PASSWORD]: setPassword,
  [AuthTypes.USER_LIST_REQUEST]: userListRequest,
  [AuthTypes.USER_LIST_SUCCESS]: userListSuccess,
  [AuthTypes.USER_LIST_FAILURE]: userListFailure,
  REHYDRATE: REHYDRATE
});
