import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import LoginActions from "../Redux/Login/LoginActions";
import { NavigationActions } from "react-navigation";

export function* getUserForAuth(api, action) {
  console.log(api, "response", action);

  const { userName, password } = action;
  // make the call to the api
  const response = yield call(api.getUserRNTS, userName, password);

  if (response.ok) {
    console.log("response", response);
    const firstUser = path(["data"], response)[0];
    const userName = firstUser && firstUser.username;
    const details = firstUser;
    // do data conversion here if needed
    if (userName) {
      yield put(LoginActions.userAuthSuccess(userName, details));
      yield put(NavigationActions.navigate({ routeName: "Home" }));
    } else yield put(LoginActions.userAuthFailure());
  } else {
    yield put(LoginActions.userAuthFailure());
  }
}
