import { RECEIVE_USERS, LOGGED_USER, UPDATE_USER } from "../actions/users";

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
    case UPDATE_USER:
      const { authedUserId, questionId } = action;
      console.log(state);
      return {
        ...state,
        [authedUserId]: {
          ...state[authedUserId],
          questions: state[authedUserId].questions.concat(questionId),
        },
      };
    default:
      return state;
  }
}
