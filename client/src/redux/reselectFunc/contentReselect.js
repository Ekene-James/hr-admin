import { createSelector } from "reselect";

const employe= state => state.employee;
export const selectEmployee = createSelector(
    [employe],
    employe => employe.employee
  );
