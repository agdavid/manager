import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      // To get react to see a new state and re-render components
      // create a new state object with all the same key/values as original state
      // then set/overwrite a specific key with the updated value
      return { ...state, email: action.payload }; //state.auth.email
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }; //state.auth.password
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload }; //state.auth.user
    default:
      return state;
  }
};
