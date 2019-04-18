import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { Reducer } from "redux";
import { UserTypes } from "./UserActions";
import { LoginReducerType } from "./Types";

export const INITIAL_STATE = Immutable({
  userId: "",
  todoList: [],
  fetching: false,
  error: false
});

/* ------------- Reducers ------------- */

export const userTodoListRequest = (state, action) => {
  const { userId } = action;
  return state.merge({ fetching: true, error: false, userId });
};

export const userTodoListUpdate = (state, action) => {
  const { update, index } = action;

  let todoList = JSON.parse(JSON.stringify(state.todoList));
  todoList[index] = update;

  return state.merge({ todoList });
};

export const userTodoListSuccess = (state, action) => {
  const { todoList } = action;
  return state.merge({ fetching: false, error: false, todoList });
};

export const userTodoListailure = state =>
  state.merge({ fetching: false, error: true, todoList: [] });

export const REHYDRATE = (state, action) => {
  return state.merge(action.payload.user);
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: Reducer<LoginReducerType> = createReducer(INITIAL_STATE, {
  [UserTypes.USER_TODO_LIST_REQUEST]: userTodoListRequest,
  [UserTypes.USER_TODO_LIST_UPDATE]: userTodoListUpdate,
  [UserTypes.USER_TODO_LIST_SUCCESS]: userTodoListSuccess,
  [UserTypes.USER_TODO_LIST_FAILURE]: userTodoListailure,
  REHYDRATE: REHYDRATE
});
