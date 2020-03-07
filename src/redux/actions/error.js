import * as types from './types';

export function resetError(errorType) {
  return (dispatch, getState) => {
    const error = getState().error[errorType];
    if (error) {
      dispatch(setError(errorType, null));
    }
  }
}

export function setError(errorType, errorObj) {
  return {
    type: types.SET_ERROR,
    error: { [errorType]: errorObj },
  }
}
