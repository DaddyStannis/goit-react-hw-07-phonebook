import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
