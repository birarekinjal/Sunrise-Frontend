import React from 'react';
// import {  Table } from '../../../infrastructure/components/index';
import Table from '../../../infrastructure/components/table/customTable';
// import { useForm } from 'react-hook-form';

const DatePickerDemo = () => {
  // const { handleSubmit, control } = useForm();

  // const onSubmit = (data:any) =>{
  //   alert(data);
  // };

  return (
    <>
     {/* <form onSubmit={handleSubmit(onSubmit)}>
        <DatePicker label='DatePicker' control={control} name='type' /> 
        <input type='submit' />
      </form> */}
      <Table />
    </>
  );
};

export default DatePickerDemo;
