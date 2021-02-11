import { IS_LOADING, CLEAR_ERRORS} from '../type'


export const isLoading = (payload) => {
    return {
      type: IS_LOADING,
      payload: payload
    };
  };

export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };
