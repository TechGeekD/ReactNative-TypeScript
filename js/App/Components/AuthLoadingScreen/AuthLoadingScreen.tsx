import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

interface AuthLoadingScreenProps {
  navigation?: any;
}

export default class AuthLoadingScreen extends React.Component<
  AuthLoadingScreenProps
> {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    let authenticated = false;
    const value = await AsyncStorage.getItem("persist:primary");
    if (value) {
      const login = JSON.parse(JSON.parse(value).login);
      authenticated = login.authed;

      console.log("authenticated", authenticated, login);
    }

    setTimeout(() => {
      this.props.navigation.navigate(
        authenticated === true ? "LaunchScreen" : "LoginScreen"
      );
    }, 2000);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
