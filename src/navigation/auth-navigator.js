import { createStackNavigator } from "react-navigation-stack";
import AuthSelection from "../screens/auth-selection";
import Login from "../screens/login";
import ForgotPassword from "../screens/forgot-password";
import ResetPasswordCodeVerification from "../screens/reset-password-code-verification";
import ResetPassword from "../screens/reset-password";
import SignupFirstName from "../screens/signup-first-name";
import SignupBirthDate from "../screens/signup-birthdate";
import SignupGenderSelect from "../screens/signup-gender-select";
import SignupUsername from "../screens/signup-username";
import SignupImage from "../screens/signup-image";
import SignupPhoneNumber from "../screens/signup-phone-number";
import SignupCodeVerification from "../screens/signup-code-verification";
import SignupSuccess from "../screens/signup-success";

import Inbox from "../screens/inbox";
import Chat from "../screens/chat";
import ProfileView from "../screens/profile-view";
import Swipe from "../screens/swipe";

import navigationConfig from "./navigation-config";

const AuthStack = createStackNavigator(
  {
    AUTH_SELECTION: { screen: AuthSelection },
    LOGIN: { screen: Login },
    FORGOT_PASSWORD: { screen: ForgotPassword },
    RESET_PASSWORD_CODE_VERIFICATION: { screen: ResetPasswordCodeVerification },
    RESET_PASSWORD: { screen: ResetPassword },
    SIGNUP_FIRST_NAME: { screen: SignupFirstName },
    SIGNUP_BIRTH_DATE: { screen: SignupBirthDate },
    SIGNUP_GENDER_SELECT: { screen: SignupGenderSelect },
    SIGNUP_USERNAME: { screen: SignupUsername },
    SIGNUP_IMAGE: { screen: SignupImage },
    SIGNUP_PHONE_NUMBER: { screen: SignupPhoneNumber },
    SIGNUP_CODE_VERIFICATION: { screen: SignupCodeVerification },
    SIGNUP_SUCCESS: { screen: SignupSuccess },

    INBOX: { screen: Inbox },
    CHAT: { screen: Chat },
    PROFILE_VIEW: { screen: ProfileView },
    SWIPE: { screen: Swipe },
  },
  {
    initialRouteName: "SWIPE",
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: "transparent",
      },
      ...navigationConfig,
    },
  },
);

AuthStack.navigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
  ...navigationConfig,
};

export { AuthStack };
