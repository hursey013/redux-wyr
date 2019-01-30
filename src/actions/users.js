export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function saveUserAnswer(question) {
  return {
    type: SAVE_USER_ANSWER,
    question
  };
}

export function saveUserQuestion(question) {
  return {
    type: SAVE_USER_QUESTION,
    question
  };
}
