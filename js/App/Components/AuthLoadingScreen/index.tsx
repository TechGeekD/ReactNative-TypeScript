import * as React from "react";
import AuthLoadingScreen from "./AuthLoadingScreen";
import { ColorScheme } from "../../Themes/Colors";

export interface AuthLoadingScreenProps {
  navigation?: any
  isDarkMode?: boolean;
  colorScheme?: ColorScheme;
}

export default (props: AuthLoadingScreenProps) => (
  <AuthLoadingScreen {...props} />
);
