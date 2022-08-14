import { createSlice } from '@reduxjs/toolkit';
import { isContactInList } from 'helpers/isContactInList';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem(state, action) {
      if (isContactInList(state.items, action.payload)) {
        alert(`${action.payload.name} is already in contacts.`);
        return state;
      }

      const id = nanoid(5);
      const newContact = { id, ...action.payload };
      state.items.push(newContact);
    },

    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;
