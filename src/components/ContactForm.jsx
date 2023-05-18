import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';

const phoneRegExp = /[+3][0-9]{12}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Слишком короткое!')
    .max(20, 'Слишком длинное!')
    .required('Заполните это поле'),
  number: Yup.string()
    .matches(phoneRegExp, 'Заполните поле в формате +380000000000')
    .required('Заполните это поле'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component={'span'} />
        </Label>

        <Label>
          Number
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component={'span'} />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
