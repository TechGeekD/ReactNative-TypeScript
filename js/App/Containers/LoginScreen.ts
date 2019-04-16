import { connect } from "react-redux";
import * as LoginActions from "../Redux/Login/LoginActions";
import LoginScreenComponent from "../Components/LoginScreen/LoginScreenComponent";

const AuthTypes = LoginActions.AuthTypes;

const mapStateToProps = state => ({
  colorScheme: state.appSettings.colorScheme,
  userList: state.login.userList,
  userName: state.login.userName,
  password: state.login.password,
  fetching: state.login.fetching,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  getUserForAuth: (userName: string, password: string) =>
    dispatch({ type: AuthTypes.USER_AUTH_REQUEST, userName, password }),
  setUserName: (userName: string) =>
    dispatch({ type: AuthTypes.SET_USER_NAME, userName }),
  setPassword: (password: string) =>
    dispatch({ type: AuthTypes.SET_PASSWORD, password }),
  getUsersList: () => dispatch({ type: AuthTypes.USER_LIST_REQUEST })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenComponent);
