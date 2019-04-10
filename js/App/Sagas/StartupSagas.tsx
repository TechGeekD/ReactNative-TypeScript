import { call, put, select } from "redux-saga/effects";
import { path, is } from "ramda";
import LoginActions from "../Redux/Login/LoginActions";
import GithubActions, { GithubSelectors } from "../Redux/Github/GithubRedux";

// exported to make available for tests
export const selectAvatar = GithubSelectors.selectAvatar;

export interface subObject {
  a: number;
  b: number[];
  c: boolean;
}
// process STARTUP actions
export function* startup() {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log("Hello, I'm an example of how to log via Reactotron.");

    // logging an object for better clarity
    console.tron.log({
      message: "pass objects for better logging",
      someGeneratorFunction: selectAvatar
    });

    const subObject = { a: 1, b: [1, 2, 3], c: true };
    //  subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: "🔥 IGNITE 🔥",
      preview: "You should totally expand this",
      value: {
        "💃": "Welcome to the future!",
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar
      }
    });
  }
  const avatar = yield select(selectAvatar);
  // only get if we don't have it yet
  if (!is(String, avatar)) {
    yield put(GithubActions.userRequest("GantMan"));
  }
}

export function* getUsersList(api) {
  console.log(api, "response");

  // make the call to the api
  const response = yield call(api.getUserListRNTS);

  if (response.ok) {
    console.log("response:getUsersList", response);
    const userList = path(["data"], response);
    // do data conversion here if needed
    if (userList.length) {
      yield put(LoginActions.userListSuccess(userList));
    } else yield put(LoginActions.userListFailure());
  } else {
    yield put(LoginActions.userListFailure());
  }
}
