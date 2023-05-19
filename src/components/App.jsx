import { useState } from 'react';
import { ContactForm } from './ContactForm';
import PropTypes from 'prop-types';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import data from './data.json';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Container, Title, TitleContact } from 'Styles/StyleForm.styled';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', data);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const isExist = contacts.find(contact => contact.name === newContact.name);

    if (isExist) {
      alert(`${newContact.name} ia already in contacts`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const deliteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const filteredContact = filterContact();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={addContact} />
      <Filter onChange={changeFilter} value={filter} />

      <TitleContact>Contacts</TitleContact>
      <ContactList contacts={filteredContact} removeContact={deliteContact} />
    </Container>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
