import { render, screen } from '@testing-library/react';
import { Login } from '../login/index';
import userEvent from '@testing-library/user-event';






beforeEach(() => {
  render(<Login />);
});


type loginTypes = {
  email: any;
  password: any;
};

const typeIntoForm = ({ email, password }: loginTypes) => {
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });

  const passwordInputElement = screen.getByLabelText('Password');

  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }

  return {
    emailInputElement,
    passwordInputElement,
  };
};

describe('Login', () => {
  test('inputs should be initially empty', () => {
    const emailInputElement = screen.getByRole('textbox');
    const passwordInputElement = screen.getByLabelText('Password');
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
  });

  test('should be able to type an email', () => {
    const { emailInputElement } = typeIntoForm({ email: 'demo@tntra.io' });
    expect(emailInputElement.value).toBe('demo@tntra.io');
  });

  test('should be able to type password', () => {
    const { passwordInputElement } = typeIntoForm({ password: 'password' });
    expect(passwordInputElement.value).toBe('password');
  });

  test('button should be enable', () => {
    expect(screen.getByTestId('button', { name: 'submit' })).toBeEnabled();
  });

  test('email label with correct text', () => {
    // const { getByTestId } = render(<Login />);
    // const emailElement = getByTestId('header');
    expect(screen.getByTestId('emailTest').textContent).toBe('Email');
  });
 
});
