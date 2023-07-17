export const NAVIGATE_TO_SCREEN_2 = 'NAVIGATE_TO_SCREEN_2';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_REGISTRATION_DATA = 'SET_REGISTRATION_DATA';

export const navigateToScreen2 = () => {
  return {
    type: NAVIGATE_TO_SCREEN_2,
  };
};

export const setPhoneNumber = (phoneNumber) => {
  return {
    type: SET_PHONE_NUMBER,
    payload: phoneNumber,
  };
};

export const setRegistrationData = (data) => {
  return {
    type: SET_REGISTRATION_DATA,
    payload: data,
  };
};

