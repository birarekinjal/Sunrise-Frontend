import React, { useState }  from 'react';
import { Input, Button } from '../index';

type NumberCountProps = {
  // handleIncrement?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // handleDecrement?: any;
  count?: Number;
  // handleChange?: any;
};

const NumberCount:React.FC<NumberCountProps> = () => {

  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e:any) => {
    setCount(e.nativeEvent.data);
  };

  return (
    <>
    <Button label='+' onClick={handleIncrement}/>
    <Input type='input' value={count} onChange={(e)=>handleChange(e)}/>
    <Button label='-' onClick={handleDecrement}/>
    </>
  );
};

export default NumberCount;