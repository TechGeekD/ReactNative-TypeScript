import * as React from "react";
import { View, ActivityIndicator } from "react-native";
import { CardItem, Text, Item, Picker, Icon, H3 } from "native-base";
import styles from "../../Styles/index";
import Fonts from "../../../../Themes/Fonts";
import {
  MaterialTextInput,
  MaterialContainedButton
} from "react-native-typescript-material-ui-collection";
import { primaryColor } from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import { LoginFormProps } from "./index";

export default (props: LoginFormProps) => {
  const [pickedUser, pickUser] = React.useState({
    userName: props.userName ? props.userName : "",
    password: props.password ? props.password : ""
  });
  return (
    <View>
      <CardItem>
        <View style={styles.loginFormPhoneInputContainer}>
          <MaterialTextInput
            titleTextStyle={{ ...Fonts.style.input }}
            labelTextStyle={{ ...Fonts.style.input }}
            containerStyle={{ flex: 1 }}
            label={I18n.t("userName")}
            value={props.userName}
            isRtl={false}
            onChangeText={text => props.onTextChangeUserName(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <View style={styles.loginFormPhoneInputContainer}>
          <MaterialTextInput
            titleTextStyle={{ ...Fonts.style.input }}
            labelTextStyle={{ ...Fonts.style.input }}
            containerStyle={{ flex: 1 }}
            label={I18n.t("password")}
            value={props.password}
            secureTextEntry
            isRtl={false}
            onChangeText={text => props.onTextChangePasword(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <View style={{ flexDirection: "row" }}>
          {props.userList.length > 0 && (
            <Item style={{ width: "80%" }} picker>
              <Picker
                note
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select User"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={pickedUser}
                onValueChange={value => {
                  pickUser(value);
                  props.onUserPicked(value);
                }}
              >
                <Picker.Item
                  key={"-1"}
                  label={"Select User"}
                  value={{ userName: "", password: "" }}
                />
                {props.userList.map(user => (
                  <Picker.Item
                    key={user.id}
                    label={user.username}
                    value={{
                      userName: user.username,
                      password: String(user.id)
                    }}
                  />
                ))}
              </Picker>
            </Item>
          )}

          <MaterialContainedButton
            onPress={() => {
              props.onPress();
            }}
            color={primaryColor}
            text="Login"
            textColor="white"
          />
        </View>
      </CardItem>
      <CardItem
        style={{ height: 40, flexDirection: "row", justifyContent: "center" }}
      >
        <View>
          {props.isLoading === true && (
            <View>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          )}
          {props.error === true && (
            <H3 style={{ color: "red" }}>{"Error..."}</H3>
          )}
        </View>
      </CardItem>
    </View>
  );
};
