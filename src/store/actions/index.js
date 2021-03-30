export const SAVE_SUBMISSION = "SAVE_SUBMISSION";
export const SAVE_SUBMISSION_COMMIT = "SAVE_SUBMISSION_COMMIT";
export const SAVE_SUBMISSION_ROLLBACK = "SAVE_SUBMISSION_ROLLBACK";

export const saveSubmission = data => ({
  type: SAVE_SUBMISSION,
  payload: { data },
  meta: {
    offline: {
      effect: {
        url: "http://localhost:3000/api/submit/",
        method: "POST",
        body: JSON.stringify({ data })
      },
      commit: {
        type: SAVE_SUBMISSION_COMMIT,
        payload: null,
        meta: { data }
      },
      rollback: {
        type: SAVE_SUBMISSION_ROLLBACK,
        payload: null,
        error: true,
        meta: { data }
      }
    }
  }
});
