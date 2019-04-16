import { connect } from "react-redux";
import HomeComponent from "../Components/Home/HomeComponent";
import { AuthTypes } from "../Redux/Login/LoginActions";

const mapStateToProps = state => {
  return {
    userName: state.login.userName,
    details: state.login.details
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch({ type: AuthTypes.USER_LOGOUT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
