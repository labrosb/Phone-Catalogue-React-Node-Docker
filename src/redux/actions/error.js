import * as types from './types';

export function resetError(errorType) {
  return (dispatch, getState) => {
    // Check if an error of the given type exists
    const error = getState().error[errorType];
    // If it exists, reset...
    if (error) {
      dispatch(setError(errorType, null));
    }
  }
}

export function setError(errorType, errorMsg) {
  return {
    type: types.SET_ERROR,
    error: errorMsg,
    errorType,
  }
}
