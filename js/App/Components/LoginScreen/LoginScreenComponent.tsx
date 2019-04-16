import * as React from "react";
import { View } from "react-native";
import { MaterialColors } from "react-native-typescript-material-ui-collection";
import { ColorScheme } from "../../Themes/Colors";
import styles from "./Styles/index";
import { Card } from "native-base";
import LoginForm from "./Forms/LoginForm/index";

interface LoginScreenProps {
  navigation?: any;
  colorScheme: ColorScheme;
  userName?: string;
  password?: string;
  fetching?: boolean;
  error?: boolean;
  userList?: any;
  setUserName?(userName: string): void;
  setPassword?(password: string): void;
  getUserForAuth?(username: string, password: string): void;
  getUsersList?(): void;
}

interface LoginScreenState {
  isLoading?: boolean;
  error?: boolean;
}

export default class LoginScreen extends React.Component<
  LoginScreenProps,
  LoginScreenState
> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let updated = {};
    if (nextProps.fetching !== prevState.fetching) {
      updated = { ...updated, isLoading: nextProps.fetching };
    }

    if (nextProps.error !== prevState.error) {
      updated = { ...updated, error: nextProps.error };
    }

    return updated;
  }

  componentDidMount() {
    this.props.getUsersList();
  }

  handleOnPress = () => {
    this.props.getUserForAuth(this.props.userName, this.props.password);
  };

  handleUserPicked = (picked: any) => {
    this.props.setUserName(picked.userName);
    this.props.setPassword(picked.password);
  };

  render() {
    return (
      <View
        style={[
          styles.mainContainer,
          styles.loginForm,
          { backgroundColor: this.props.colorScheme.containersBackground }
        ]}
      >
        <Card style={{ width: "100%" }}>
          <LoginForm
            onPress={this.handleOnPress}
            userName={this.props.userName}
            password={this.props.password}
            onTextChangeUserName={text => this.props.setUserName(text)}
            onTextChangePasword={text => this.props.setPassword(text)}
            isLoading={this.state.isLoading}
            error={this.state.error}
            primaryColor={MaterialColors.blue.C500}
            onUserPicked={this.handleUserPicked}
            userList={this.props.userList}
            isRtl={false}
          />
        </Card>
      </View>
    );
  }
}
