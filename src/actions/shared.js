import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// Importing Action Creators
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
// import { setAuthedUser } from "./authedUser";

// const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
