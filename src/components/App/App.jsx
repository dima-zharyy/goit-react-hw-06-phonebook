import { useSelector } from 'react-redux/';
import { ContactForm, ContactList, Filter } from 'components';

import {
  AppContainer,
  AppTitle,
  AppSubTitle,
  ContactsWrapper,
} from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
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
