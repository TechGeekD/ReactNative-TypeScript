import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import styles from "./Styles/NavigationStyles";

import AuthLoadingScreen from "../Components/AuthLoadingScreen";

import Home from "../Containers/Home";
import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";


export const MainNav = createStackNavigator(
  {
    Home: { screen: Home },
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    AuthLoadingScreen: { screen: AuthLoadingScreen },
    LoginScreen: { screen: LoginScreen },
    LaunchScreen: { screen: createAppContainer(MainNav) }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "AuthLoadingScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
