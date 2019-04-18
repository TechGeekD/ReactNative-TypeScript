import * as React from "react";
import { Component } from "react";

// Styles
import styles from "./Styles/HomeStyle";
import {
  Text,
  View,
  Button,
  Icon,
  Container,
  Header,
  Body,
  Left,
  Title,
  Right,
  H1,
  Content,
  List,
  ListItem,
  Switch
} from "native-base";
import { NavigationActions } from "react-navigation";

interface HomeProps {
  userName?: string;
  details?: any;
  navigation?: any;
  todoList?: any;
  logoutUser?(): void;
  getUserTodoList?(userId: string): void;
  userTodoListUpdate?(update: any, index: number): void;
}

interface HomeState {
  todoList?: any;
  userId?: string;
}

const navigateAction = NavigationActions.navigate({
  routeName: "LoginScreen"
});

export default class HomeComponent extends Component<HomeProps, HomeState> {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      todoList: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let updated = {};

    if (
      nextProps.todoList.length > 0 &&
      JSON.stringify(nextProps.todoList[0]) !==
        JSON.stringify(prevState.todoList[0])
    ) {
      updated = {
        ...updated,
        todoList: nextProps.todoList,
        userId: nextProps.details.id
      };
    }

    if (nextProps.details.id !== prevState.userId) {
      updated = {
        ...updated,
        userId: nextProps.details.id
      };
    }

    return updated;
  }

  componentDidMount() {
    this.props.getUserTodoList(this.state.userId);
  }

  componentWillUnmount() {
    this.setState({
      todoList: [],
      userId: ""
    });
  }

  updateTodoList = (update, index) => {
    this.setState(state => {
      let todoList = JSON.parse(JSON.stringify(state.todoList));
      todoList[index] = { ...todoList[index], ...update };

      this.props.userTodoListUpdate(todoList[index], index);
      return { todoList };
    });
  };

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
        <Content>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <H1 style={{ color: "red" }}>{this.props.details.name}</H1>
          </View>
          <View
            style={{
              flex: 0.2
            }}
          >
            <List>
              {this.state.todoList.length > 0 &&
                this.state.todoList.map((todo, index) => (
                  <ListItem key={todo.id} icon>
                    <Left>
                      <Button style={{ backgroundColor: "#FF9501" }}>
                        <Icon
                          type="AntDesign"
                          name={todo.completed ? "tag" : "tago"}
                        />
                      </Button>
                    </Left>
                    <Body>
                      <Text numberOfLines={1} style={{ color: "white" }}>
                        {todo.title}
                      </Text>
                    </Body>
                    <Right>
                      <Switch
                        onValueChange={completed => {
                          this.updateTodoList({ completed }, index);
                        }}
                        value={todo.completed}
                      />
                    </Right>
                  </ListItem>
                ))}
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}
