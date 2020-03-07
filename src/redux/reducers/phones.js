import * as types from '../actions/types';

export default function phones(state = null, action) {

  switch (action.type) {

    case types.SET_PHONE_LIST:
      return action.list;

    default:
      return state;
  }
}
