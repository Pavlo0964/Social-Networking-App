import { call, put, takeEvery, select } from "redux-saga/effects";
import { UserCreators, UserTypes } from "../actions";
import { login, register } from "@redux/api";
import { registrationSelector } from "../selectors";

export function* watchUserRequests() {
  yield takeEvery(UserTypes.REQUEST_LOGIN, requestLogin);
  yield takeEvery(UserTypes.REQUEST_REGISTRATION, requestRegistration);
}

function* requestLogin(action) {
  try {
    const { params } = action;
    const response = yield call(login, params);

    yield put(UserCreators.loginSuccess(response.data));
  } catch (error) {
    yield put(UserCreators.loginFailure());
  }
}

function* requestRegistration(action) {
  try {
    const registrationData = yield select(registrationSelector);
    // const params = new FormData();
    // // {"name":"Ammar","dob":"14-10-1991","gender":"M","username":"mammarijaz@gmail.com","password":"abc123","phone":"+923054322228"}
    // params.append("name", registrationData.firstName);
    // params.append("dob", registrationData.birthDate);
    // params.append("gender", registrationData.gender);
    // params.append("username", registrationData.username);
    // params.append("password", registrationData.password);
    // params.append("phone", registrationData.phoneNumber);
    const params = {
      name: registrationData.firstName,
      dob: registrationData.birthDate,
      gender: registrationData.gender,
      username: registrationData.username,
      password: registrationData.password,
      phone: registrationData.phoneNumber,
    };

    const response = yield call(register, params);

    yield put(UserCreators.registrationSuccess(response.data.body));
  } catch (error) {
    yield put(UserCreators.registrationFailure());
  }
}
