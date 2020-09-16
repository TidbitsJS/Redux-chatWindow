import { generateUser } from "../staticData";

export default function user(state = generateUser(), action) {
  return state;
}
