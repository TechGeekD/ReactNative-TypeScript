import { connect } from "react-redux";
import HomeComponent from "../Components/Home/HomeComponent";
import { AuthTypes } from "../Redux/Login/LoginActions";
import { UserTypes } from "../Redux/User/UserActions";

const mapStateToProps = state => {
  return {
    userName: state.login.userName,
    details: state.login.details,
    todoList: state.user.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch({ type: AuthTypes.USER_LOGOUT }),
    getUserTodoList: (userId: string) =>
      dispatch({ type: UserTypes.USER_TODO_LIST_REQUEST, userId })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
