import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addToStorage(state, action) {
      const newContact = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      state.items.push(newContact);
    },
    removeFromStorage(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addToStorage, removeFromStorage } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
