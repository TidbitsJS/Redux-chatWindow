import { generateUser } from "../staticData";

export default function User(state = generateUser(), action) {
  return state;
}
