import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth(); //get current user
  // use ReduxThunk to return function and 'fake' dispatch of action
  return () => {
     //path through JSON data structure
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift }) //save to referenced space
      .then(() => Actions.employeeList({ type: 'reset' })); //route to scene, no back button
  };
};
