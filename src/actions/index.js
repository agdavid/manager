// action creator
export const emailChanged = (text) => {
  // returns an action plain JS object
  return {
    type: 'email_changed',
    payload: text
  };
};
