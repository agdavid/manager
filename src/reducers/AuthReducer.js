import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // To get react to see a new state and re-render components
      // create a new state object with all the same key/values as original state
      // then set/overwrite a specific key with the updated value
      return { ...state, email: action.payload }; //state.auth.email
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }; //state.auth.password
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }; //state.auth.loading
    case LOGIN_USER_SUCCESS:
      return { ...state,
        ...INITIAL_STATE,
        user: action.payload,
      }; //state.auth.user
    case LOGIN_USER_FAIL:
      return { ...state,
        error: 'Authentication Failed.',
        password: '',
        loading: false
      }; //state.auth.error
    default:
      return state;
  }
};
