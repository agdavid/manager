import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth(); //get current user
  firebase.database().ref(`/users/${currentUser.uid}/employees`) //path through JSON data structure
    .push({ name, phone, shift }); //save to referenced space
};
