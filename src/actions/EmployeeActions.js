import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
 } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth(); //get current user

  return (dispatch) => {
     //path through JSON data structure
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift }) //save to referenced space
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' }); //route to scene, no back button
      });
  };
};
