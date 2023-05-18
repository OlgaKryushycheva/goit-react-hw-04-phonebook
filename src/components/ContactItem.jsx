import PropTypes from 'prop-types';
import { Btn, Item } from 'Styles/StyleForm.styled';

export const ContactItem = ({
  removeContact,
  contact: { name, number, id },
}) => {
  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={() => removeContact(id)}>
        Delite
      </Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};
