import { saveQuestionAnswer } from "../utils/api";
import { handleInitialData } from "./shared";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveAnswerToQuestion(authedUser, qid, answer) {
  return (dispatch, getState) => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then((_) => {
      // dispatch(receiveQuestions(questions));
      console.log("Received", _);
      dispatch(handleInitialData());
    });
  };
}
