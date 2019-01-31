import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER,
  SAVE_NEW_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action.question;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    case SAVE_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question
        }
      };
    default:
      return state;
  }
}
