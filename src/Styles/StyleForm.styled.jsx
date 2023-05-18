import styled from '@emotion/styled';
import { Form as FormikForm } from 'formik';
import { ErrorMessage as FormikMessage } from 'formik';
import { Field as FormikField } from 'formik';

export const Container = styled.div`
  width: 430px;
  padding: 30px;
  margin: 10px auto;
  background-color: ${props => props.theme.colors.white};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.black};
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  outline: 2px solid ${props => props.theme.colors.black};
  outline-offset: -2px;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 15px;
  font-weight: 400;
`;

export const Field = styled(FormikField)`
  display: block;
  width: 200px;
  height: 30px;
  padding: 5px 7px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 4px;
  outline: none;

  :hover,
  :focus {
    border: 1px solid ${props => props.theme.colors.blue};
  }
`;

export const ErrorMessage = styled(FormikMessage)`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.red};
`;

export const TitleContact = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Btn = styled.button`
  padding: 3px 15px;
  max-width: 150px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.black};
  cursor: pointer;

  transition-property: color, background-color, border-color, box-shadow;
  transition-delay: 250ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    border-color: ${props => props.theme.colors.blue};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
