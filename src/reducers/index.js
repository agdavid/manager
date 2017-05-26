import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // set state to values returned by reducers
  auth: AuthReducer
});
