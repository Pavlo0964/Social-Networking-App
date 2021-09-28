import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  setFirstName: ["firstName"],
  setBirthDate: ["birthDate"],
  setGender: ["gender"],
  setUsername: ["username"],
  setPassword: ["password"],
  setPicture: ["picture"],
  setPhoneNumber: ["phoneNumber"],
  resetRegistration: null,
});

export const RegistrationTypes = Types;
export const RegistrationCreators = Creators;
