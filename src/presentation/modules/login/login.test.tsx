import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(emailInputElement.textContent).toBe('');
    expect(passwordInputElement.textContent).toBe('');
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
    expect(screen.getByTestId('emailTest').textContent).toBe('Email');
  });

  test('password label with correct text', () => {
    expect(screen.getByTestId('passwordLabel').textContent).toBe('Password');
  });

  test('button label with correct text', () => {
    expect(screen.getByTestId('button').textContent).toBe('Login');
  });

  test('input value with correct text', () => {
    expect(screen.getByTestId('email')).toBeInTheDocument('a@tntra.io');
  });

  test('password value with correct text', () => {
    expect(screen.getByTestId('password')).toBeInTheDocument('123456');
  });

  test('password with empty value', () => {
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  test('button renders with button label', () => {
    const buttonLabel = screen.getByTestId('button');
    expect(buttonLabel.textContent).toBe('Login');
  });


  test('checkbox with empty label value', () => {
    expect(screen.getByTestId('check')).toBeInTheDocument();
  });

  test('checkbox with label', () => {
    const checkboxLabel = screen.getByTestId('check');
    expect(checkboxLabel.textContent).toBe('Remember Me');
  });

  // const input = screen.getByRole('textbox', { name: 'email' });
  // fireEvent.keyDown(input, { key: 'ArrowDown' });

  // test('change value input works', () => {
  //   const { getByTestId } = render(<Login />);
  //   const inputEl =  getByTestId('input-email');

  //   fireEvent.change(inputEl, {
  //     target: {
  //       value: 'correct@mail.com',
  //     },
  //   });
  //   expect(inputEl.textContent).toBe('correct@mail.com');
  // });


 
  // test('change value of input works correctly', () => {
  //   const inputEl = screen.getByTestId('input-email').querySelector('inpu');
  //   // fireEvent.change(inputEl, {
  //   //   target: {
  //   //     value: 'a@tntra.io',
  //   //   },
  //   // });
  //   // const field = screen.getByTestId('input-email').querySelector('input');
  //   // now fire your event
  //   fireEvent.change(inputEl, { target: { value: 'abcd@xyz.com' } });
  // });

 
});

// test('keeps the submit button disabled when only password provided', () => {
//   const { getByTestId } = render(<Login />);

//   const password = getByTestId('input-email');
//   const submit = getByTestId('button');

//   fireEvent.change(password, { target: { value: 'password' } });
//   expect(submit).toHaveClass('Mui-disabled');
// });