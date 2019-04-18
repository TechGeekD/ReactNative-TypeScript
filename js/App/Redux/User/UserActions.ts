import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  userTodoListRequest: ["userId"],
  userTodoListUpdate: ["update", "index"],
  userTodoListSuccess: ["todoList"],
  userTodoListFailure: ["error"]
});

export const UserTypes = Types;
export default Creators;
