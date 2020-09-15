import { SET_TYPING_VALUE, SEND_MESSAGE } from "../constants/ActionTypes";

export default function Typing(state = "", action) {
  switch (action.types) {
    case SET_TYPING_VALUE:
      return action.payload;

    case SEND_MESSAGE:
      return "";

    default:
      return state;
  }
}
