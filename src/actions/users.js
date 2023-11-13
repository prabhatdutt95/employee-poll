export const RECEIVE_USERS = "RECEIVE_USERS";
export const LOGGED_USER = "LOGGED_USER";
export const UPDATE_USER = "UPDATE_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function registerUser(user) {
  return {
    type: LOGGED_USER,
    user,
  };
}

export function updateUser(authedUserId, questionId) {
  return {
    type: UPDATE_USER,
    authedUserId,
    questionId,
  };
}
