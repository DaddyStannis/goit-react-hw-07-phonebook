import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

const store = configureStore({
  reducer: contactsReducer,
});

export { store };
