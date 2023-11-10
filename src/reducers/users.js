import { RECEIVE_USERS, LOGGED_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case LOGGED_USER:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
}
