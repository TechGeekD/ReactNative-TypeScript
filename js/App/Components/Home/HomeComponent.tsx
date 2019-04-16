import * as React from "react";
import { Component } from "react";

// Styles
import styles from "./Styles/HomeStyle";
import {
  View,
  Button,
  Icon,
  Container,
  Header,
  Body,
  Left,
  Title,
  Right,
  H1
} from "native-base";
import { NavigationActions } from "react-navigation";

interface HomeProps {
  userName?: string;
  details?: any;
  navigation?: any;
  logoutUser?(): void;
}

const navigateAction = NavigationActions.navigate({
  routeName: "LoginScreen"
});

export default class HomeComponent extends Component<HomeProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="darkred" transparent>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome5" name="react" />
            </Button>
          </Left>
          <Body>
            <Title>ReactNativeTS</Title>
          </Body>
          <Right>
            <Button
              onPress={() => {
                console.log("event");
                this.props.logoutUser();
                this.props.navigation.dispatch(navigateAction);
              }}
              info
              transparent
            >
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <View
          style={{
            flex: 0.9,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <H1 style={{ color: "red" }}>Welcome to Home</H1>
          <H1 style={{ color: "red" }}>{this.props.details.name}</H1>
        </View>
      </Container>
    );
  }
}
