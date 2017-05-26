import { EMAIL_CHANGED } from './types';

// action creator
export const emailChanged = (text) => {
  // returns an action plain JS object
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
