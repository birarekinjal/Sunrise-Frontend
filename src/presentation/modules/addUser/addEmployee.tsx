import React from 'react';
import { useSetAddUser } from './hook/useSetAddUser';
import AddEmployeeForm from './addEmployeeForm';

const AddEmployee = () => {
  const { handleOnSubmit } = useSetAddUser();
  return (
    <div>
      <h2>Add Employee</h2>
      <AddEmployeeForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddEmployee;
