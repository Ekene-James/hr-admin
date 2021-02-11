import { createSelector } from "reselect";


const loading= state => state.loading;



//loading
export const selectLoading = createSelector(
    [loading],
    loading => loading.loading
    );
