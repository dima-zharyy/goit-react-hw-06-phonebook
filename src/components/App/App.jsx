import { useSelector } from 'react-redux/';
import { ContactForm, ContactList, Filter } from 'components';

import {
  AppContainer,
  AppTitle,
  AppSubTitle,
  ContactsWrapper,
} from './App.styled';

import { getFilter, getItems } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />

      <AppSubTitle>Contacts</AppSubTitle>
      <ContactsWrapper>
        <Filter />
        {contacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <p>Your contact book is empty</p>
        )}
      </ContactsWrapper>
    </AppContainer>
  );
};
