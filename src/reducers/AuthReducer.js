import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // To get react to see a new state and re-render components
      // create a new state object with all the same key/values as original state
      // then set/overwrite a specific key with the updated value
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
