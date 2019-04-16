import * as React from "react";
import Ltr from "./LoginForm.ltr";
import Rtl from "./LoginForm.rtl";

export interface LoginFormProps {
  primaryColor: string;
  onTextChangeUserName?(text: string): void;
  onTextChangePasword?(text: string): void;
  userName: string;
  password: string;
  isLoading?: boolean;
  error?: boolean;
  userList?: any;
  onPress?(): void;
  onUserPicked?(picked: any): void;
  isDarkMode?: boolean;
  isRtl?: boolean;
}

export default (props: LoginFormProps) =>
  props.isRtl ? <Rtl {...props} /> : <Ltr {...props} />;
