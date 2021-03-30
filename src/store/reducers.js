import { SAVE_SUBMISSION, SAVE_SUBMISSION_ROLLBACK } from "_store/actions";

const initialState = {
  submissions: {}
};

const submissionReducer = (state = initialState, action) => {
  switch(action.type) {
  case SAVE_SUBMISSION:
    return {
      ...state,
      submissions: { ...state.submissions, [action.payload.data]: true, error: null}
    };
  case SAVE_SUBMISSION_ROLLBACK:
    return {
      ...state,
      submissions: { ...state.submissions, [action.payload.data]: false, error: action.payload}
    };
  default:
    return state;
  }
};

export default submissionReducer;
