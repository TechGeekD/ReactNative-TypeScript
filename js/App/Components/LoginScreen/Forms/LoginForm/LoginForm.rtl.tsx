import * as React from "react";
import { View } from "react-native";
import { CardItem, Picker, Item, Icon } from "native-base";
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
            isRtl={false}
            onChangeText={text => props.onTextChangePasword(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <Item style={{ width: "80%" }} picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Select User"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            onValueChange={props.onUserPicked}
          >
            <Picker.Item
              label="Select User"
              value={{ userName: "", password: "" }}
            />
            {props.userList.length &&
              props.userList.map(user => (
                <Picker.Item
                  key={user.id}
                  label={user.username}
                  value={{ userName: user.username, password: String(user.id) }}
                />
              ))}
          </Picker>
        </Item>
        <MaterialContainedButton
          onPress={() => {
            props.onPress();
          }}
          color={primaryColor}
          text="Login"
          textColor="white"
        />
      </CardItem>
    </View>
  );
};
