import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestContacts,
  deleteContact,
  createContact,
} from 'components/shared/api/contacts-api';
import { addToStorage, removeFromStorage } from './contactsSlice';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async (_, thunkAPI) => {
    try {
      return await requestContacts();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const removeContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await deleteContact(id);

      if (data.id === id) {
        dispatch(removeFromStorage({ id }));
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',

  async ({ name, number }, { rejectWithValue, dispatch }) => {
    try {
      const data = await createContact(name, number);
      dispatch(addToStorage(data));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export { fetchContacts, removeContact, addContact };
