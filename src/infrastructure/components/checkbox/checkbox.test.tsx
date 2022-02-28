import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './checkbox';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
  test('button label with correct text', () => {
    render(<Checkbox data_testId='checkbox' label='Remember Me' />);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
  });


  test('check box option should be enable', () => {
    render(<Checkbox data_testId='checkbox' label='Remember Me'/>);
    expect(screen.getByTestId('checkbox') as HTMLFormElement).toBeEnabled();
  });

  

  // test('check box option should be enable', () => {
  //   render(<Checkbox data_testId='checkbox'  label='Remember Me' checked={true}/>);
  //   expect(screen.getByTestId('checkbox')).toHaveFormValues({
  //     username:'abc',
  //     rememberMe: true,
  //   });
  // });



  test('calls the onChange callback handler ', () => {
    const onChange = jest.fn();
    render(<Checkbox onChange={onChange} value='' />);
    fireEvent.click(screen.getByRole('checkbox'), {
      target: { value: 'true' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
