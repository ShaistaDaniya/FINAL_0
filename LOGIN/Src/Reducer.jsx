import { combineReducers } from 'redux';
import { SET_PHONE_NUMBER, SET_REGISTRATION_DATA } from './Action';

const phoneNumberReducer = (state = '', action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return action.payload;
    default:
      return state;
  }
};

const registrationDataReducer = (state = null, action) => {
  switch (action.type) {
    case SET_REGISTRATION_DATA:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  phoneNumber: phoneNumberReducer,
  registrationData: registrationDataReducer,
});

export default rootReducer;
