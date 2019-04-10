import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";
import FixtureAPI from "../Services/FixtureApi";
import DebugConfig from "../Config/DebugConfig";

/* ------------- Types ------------- */

import { StartupTypes } from "../Redux/StartupRedux";
import { GithubTypes } from "../Redux/Github/GithubRedux";
import { AuthTypes } from "../Redux/Login/LoginActions";

/* ------------- Sagas ------------- */

import { startup, getUsersList } from "./StartupSagas";
import { getUserAvatar } from "./GithubSagas";
import { getUserForAuth } from "./AuthSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create("https://jsonplaceholder.typicode.com/");

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(AuthTypes.USER_LIST_REQUEST, getUsersList, api),
    takeLatest(AuthTypes.USER_AUTH_REQUEST, getUserForAuth, api)
  ]);
}
