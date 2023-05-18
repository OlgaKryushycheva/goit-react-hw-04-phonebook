import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Label, Field } from '../Styles/StyleForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Formik>
      <Label>
        Find contact by name
        <Field type="text" value={value} onChange={onChange} />
      </Label>
    </Formik>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
