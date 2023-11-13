import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { handleInitialData } from "./shared";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function saveAnswerToQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then((_) => {
      dispatch(handleInitialData());
    });
  };
}

export function saveNewQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      ...question,
      author: authedUser.value,
    }).then((question) => dispatch(addQuestion(question)));
  };
}
