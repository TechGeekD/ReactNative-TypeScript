import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import UserActions from "../Redux/User/UserActions";

export function* getUsersTodoList(api, action) {
  console.log(api, "response", action);

  const { userId } = action;
  // make the call to the api
  const response = yield call(api.getUsersToDoListRNTS, userId);

  if (response.ok) {
    console.log("response:getUsersTodoList", response);
    const todoList = path(["data"], response);

    // do data conversion here if needed
    if (todoList.length > 0) {
      yield put(UserActions.userTodoListSuccess(todoList));
    } else yield put(UserActions.userTodoListFailure());
  } else {
    yield put(UserActions.userTodoListFailure());
  }
}
