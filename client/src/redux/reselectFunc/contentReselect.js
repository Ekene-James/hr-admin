import { createSelector } from "reselect";

const employe= state => state.employee;
export const selectEmployee = createSelector(
    [employe],
    employe => employe.employee
  );
export const selectEmployees = createSelector(
    [employe],
    employe => employe.employees
  );
