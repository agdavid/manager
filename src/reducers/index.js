import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  // set state to values returned by reducers
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
