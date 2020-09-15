import { combineReducers } from "redux";
import user from "./User";
import messages from "./Messages";
import typing from "./Typing";
import contacts from "./Contacts";
import activeUserId from "./ActiveUserId";

export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeUserId,
});
