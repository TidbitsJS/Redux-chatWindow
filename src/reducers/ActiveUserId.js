import { SET_ACTIVE_USER_ID } from "../constants/ActionTypes";

export default function ActiveUserId(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload;
    default:
      return state;
  }
}
