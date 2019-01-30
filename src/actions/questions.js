import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { saveUserAnswer, saveUserQuestion } from "./users.js";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_NEW_QUESTION = "SAVE_NEW_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveAnswer(question) {
  return {
    type: SAVE_ANSWER,
    question
  };
}

export function saveNewQuestion(question) {
  return {
    type: SAVE_NEW_QUESTION,
    question
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const question = { authedUser, qid, answer };

    return saveQuestionAnswer(question).then(() => {
      dispatch(saveAnswer(question));
      dispatch(saveUserAnswer(question));
    });
  };
}

export function handleSaveQuestion(question) {
  return dispatch => {
    return saveQuestion(question).then(formattedQuestion => {
      dispatch(saveNewQuestion(formattedQuestion));
      dispatch(saveUserQuestion(formattedQuestion));
    });
  };
}
