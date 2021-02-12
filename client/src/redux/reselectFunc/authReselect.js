import { createSelector } from "reselect";
const selectAuth= state => state.auth;


export const selectIsAuthenticated = createSelector(
    [selectAuth],
    auth => auth.isAuthenticated
  );
export const selectUser = createSelector(
    [selectAuth],
    auth => auth.user
  );