import { combineReducers } from "redux";

import users from "./users/reducer";
import loadingFull from "./loadingFull/reducer";

export default combineReducers({
  users,
  loadingFull,
});
