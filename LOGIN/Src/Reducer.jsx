import { combineReducers } from 'redux';
import { SET_PHONE_NUMBER, SET_REGISTRATION_DATA, NAVIGATE_TO_SCREEN_2 } from './Action';

const currentScreenReducer = (state = 'Screen1', action) => {
  switch (action.type) {
    case NAVIGATE_TO_SCREEN_2:
      return 'Screen2';
    default:
      return state;
  }
};

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
  currentScreen: currentScreenReducer,
  phoneNumber: phoneNumberReducer,
  registrationData: registrationDataReducer,

});

export default rootReducer;
