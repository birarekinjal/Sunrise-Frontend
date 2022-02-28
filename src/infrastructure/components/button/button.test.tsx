import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';
import '@testing-library/jest-dom';

describe('button component testing', () => {
  const handleClick = jest.fn();

  test('check the button render with label', async () => {
    render(
      <Button 
      label='Click Button ' 
      type='button' 
      onClick={handleClick} 
      />,
    );

    const labelElement = screen.getByText('Click Button');
    expect(labelElement).toBeInTheDocument();

    const roleElement = screen.getByRole('button');
    expect(roleElement).toBeInTheDocument();

    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(/Click button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);

    const submitButtons = screen.queryAllByText('submit');
    expect(submitButtons).toHaveLength(0); // expect no elements

    // use `queryBy` to avoid throwing an error with `getBy`
    const submitButton = screen.queryByText('submit');
    expect(submitButton).not.toBeInTheDocument();
  });
});

describe('button component assign Testing Id', () => {
  test('check the button render with label', async () => {
    render(<Button 
      data_testid='testing' 
      />);

    // match testing id 
    const testingId = screen.getByTestId('testing');
    expect(testingId).toBeInTheDocument();


    // this Function will call after onClick event fire
    fireEvent.click(testingId);
    expect(testingId).toHaveClass('MuiButton-sizeMedium');

    // initial value should be empty
    expect(testingId).not.toHaveClass('Mui-disabled');

  });


  // test('calls onClick prop when clicked', () => {
  //   const handleClick = jest.fn();
  //   render(<Button onClick={handleClick} label='click me'/>);
  //   fireEvent.click(screen.getByText(/click me/i));
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });

});
