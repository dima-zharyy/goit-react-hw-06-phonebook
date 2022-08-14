import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';

const initialState = {
  contacts: {
    items: [
      { id: '1', name: 'Dickson', number: '123123123' },
      { id: '2', name: 'Daniel', number: '847987594857' },
    ],
    filter: '',
  },
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: initialState,
});
