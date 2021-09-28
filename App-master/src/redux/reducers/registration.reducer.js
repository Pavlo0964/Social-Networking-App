import { createReducer } from "reduxsauce";
import { RegistrationTypes as Types, UserTypes } from "../actions";
import storeInitialState from "../store/initial-state";
export const INITIAL_STATE = storeInitialState.registration;

const logout = (state, action) => INITIAL_STATE;

const setFirstName = (state, action) => ({
  ...state,
  firstName: action.firstName,
});

const setBirthDate = (state, action) => ({
  ...state,
  birthDate: action.birthDate,
});

const setGender = (state, action) => ({
  ...state,
  gender: action.gender,
});

const setUsername = (state, action) => ({
  ...state,
  username: action.username,
});

const setPassword = (state, action) => ({
  ...state,
  password: action.password,
});

const setPicture = (state, action) => ({
  ...state,
  picture: action.picture,
});

const setPhoneNumber = (state, action) => ({
  ...state,
  phoneNumber: action.phoneNumber,
});

const resetRegisration = (state, params) => INITIAL_STATE;

export const HANDLERS = {
  [Types.SET_FIRST_NAME]: setFirstName,
  [Types.SET_BIRTH_DATE]: setBirthDate,
  [Types.SET_GENDER]: setGender,
  [Types.SET_USERNAME]: setUsername,
  [Types.SET_PASSWORD]: setPassword,
  [Types.SET_PICTURE]: setPicture,
  [Types.SET_PHONE_NUMBER]: setPhoneNumber,
  [Types.RESET_REGISTRATION]: resetRegisration,
  [UserTypes.LOGOUT]: logout,
};

export default createReducer(INITIAL_STATE, HANDLERS);
