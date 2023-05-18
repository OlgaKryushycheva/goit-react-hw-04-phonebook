import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List } from 'Styles/StyleForm.styled';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
