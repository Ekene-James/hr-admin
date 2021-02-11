import { createSelector } from "reselect";

const selectError= state => state.error;
export const selectAuthError = createSelector(
    [selectError],
    error => error.authError
  );
  export const selectAllErrors = createSelector(
    [selectError],
    error => error.errors
  );
 