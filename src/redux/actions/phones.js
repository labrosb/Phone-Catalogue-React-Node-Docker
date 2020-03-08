import Api from '../../utilities/api';
import * as types from './types';
import { setError, resetError } from './error';

function setPhoneList(list) {
  return {
    type: types.SET_PHONE_LIST,
    list
  };
}

export function getPhoneList() {
  return dispatch => {
    // Resets error (only if an error has already taken place)
    dispatch(resetError('phones'));

    return Api.get('phones')
      .then(list => dispatch(setPhoneList(list.data)))
      .catch(err => {
        const errorMsg = err.response ? err.response.data : err.message;
        dispatch(setError('phones', errorMsg));
      });
  };
}
