import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// Importing Action Creators
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

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

export const SELECT_TAB = "SELECT_TAB";
export const setSelectedTab = (selectedTab) => {
  return {
    type: SELECT_TAB,
    payload: selectedTab,
  };
};
