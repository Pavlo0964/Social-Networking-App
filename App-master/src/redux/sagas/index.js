import { all } from "redux-saga/effects";
import { watchUserRequests } from "./user.sagas";

export function* rootSaga() {
  yield all([watchUserRequests()]);
}
