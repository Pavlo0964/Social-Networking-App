import { createReducer } from "reduxsauce";
import { UserTypes } from "../actions";
import storeInitialState from "../store/initial-state";
export const INITIAL_STATE = storeInitialState.user;

const logout = (state, action) => INITIAL_STATE;

const requestLogin = (state, action) => ({
  ...state,
  isLoggingIn: true,
});
const loginSuccess = (state, action) => ({
  ...state,
  token: action.sessionData.usertoken,
  isLoggingIn: false,
});
const loginFailure = (state, action) => ({
  ...state,
  isLoggingIn: false,
});

const requestRegistration = (state, action) => ({
  ...state,
  isRegistring: true,
});
const registrationSuccess = (state, action) => ({
  ...state,
  token: action.sessionData.token,
  isRegistring: false,
});
const registrationFailure = (state, action) => ({
  ...state,
  isRegistring: false,
});

export const HANDLERS = {
  [UserTypes.REQUEST_LOGIN]: requestLogin,
  [UserTypes.LOGIN_SUCCESS]: loginSuccess,
  [UserTypes.LOGIN_FAILURE]: loginFailure,

  [UserTypes.REQUEST_REGISTRATION]: requestRegistration,
  [UserTypes.REGISTRATION_SUCCESS]: registrationSuccess,
  [UserTypes.REGISTRATION_FAILURE]: registrationFailure,

  [UserTypes.LOGOUT]: logout,
};

export default createReducer(INITIAL_STATE, HANDLERS);
