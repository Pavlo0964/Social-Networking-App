import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import regitrationReducer from "./registration.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  registration: regitrationReducer,
  user: userReducer,
  form: formReducer,
});

export default rootReducer;
