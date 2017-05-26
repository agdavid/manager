import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

// action creator
export const emailChanged = (text) => {
  // returns an action plain JS object
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
