import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  requestLogin: ["params"],
  loginSuccess: ["sessionData"],
  loginFailure: null,

  requestRegistration: null,
  registrationSuccess: ["sessionData"],
  registrationFailure: null,

  logout: null,
});

export const UserTypes = Types;
export const UserCreators = Creators;
