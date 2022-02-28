import { render, screen, fireEvent } from '@testing-library/react';
import Input from './input';
import '@testing-library/jest-dom';

describe('Input component with label props', () => {
  test('check the Input render with label', async () => {
    // rendering component that we want to test
    render(
      <Input
        label='sunrise label'
        placeholder='sunrise placeholder'
        helperText='helper Text'
        type='text'
        value='text'
      />,
    );

    // Finding the element
    const labelText = screen.getByLabelText('sunrise label');

    // assertion
    expect(labelText).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('sunrise placeholder'),
    ).toBeInTheDocument();

    expect(screen.getByText('helper Text')).toBeInTheDocument();

    expect(screen.getByDisplayValue('text')).toBeInTheDocument();
  });

  test('check input with empty fields', () => {
    render(
      <Input
        label=' '
        placeholder=''
        helperText=''
        value=''
        // color= ''
      />,
    );
    expect(screen.getByLabelText('')).toBeInTheDocument();

    expect(screen.getByDisplayValue('')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('')).toBeInTheDocument();
  });

  test('calls the onChange callback handler ', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} value='' />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });


  // test('should be able to type an email', () => {
  //   render(<Input name='email' type='textbox' />);
  //   const emailInputElement = screen.getByRole('textbox', {
  //     name: /email/i,
  //   });
  //   userEvent.type(emailInputElement, 'demo@tntra.com');
  //   expect(emailInputElement.value).toBe('demo@tntra.com');
  // });
});
