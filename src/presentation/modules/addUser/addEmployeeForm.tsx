import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../infrastructure/components';
import schema from './schema/addEmployee';
import { yupResolver } from '@hookform/resolvers/yup';

const AddEmployee = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      fistName: '',
      lastName: '',
      IFSC_Code:'',
      email:'',
      mobile_no:'',
      bankName:'',
      address:'',
      branchName:'',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    // console.log('data', data);
    //  add parameter and check output
    reset();
  };

  return (
    <div>
       <form>
        <Input
          placeholder="Enter First Name Here..."
          label="First Name"
          variant="outlined"
          registeredEvents={register('fistName')}
          name="fistName"
          type="text"
          error={errors.fistName?.message}
          showError={true}
          required
        />  <br></br><br></br>

        <Input
          placeholder="Enter LastName Here..."
          label="LastName"
          variant="outlined"
          registeredEvents={register('lastName')}
          name="lastName"
          type="text"
          error={errors.lastName?.message}
          showError={true}
          required
        /> <br></br><br></br>

         <Input
          placeholder="Enter IFSC_Code Here..."
          label="IFSC_Code"
          variant="outlined"
          registeredEvents={register('IFSC_Code')}
          name="IFSC_Code"
          type="text"
          error={errors.IFSC_Code?.message}
          showError={true}
          required
        /> <br></br><br></br>
 
         {/* Email */}
        <Input
          placeholder="Enter Email Here..."
          label="Email"
          variant="outlined"
          registeredEvents={register('email')}
          name="email"
          type="email"
          error={errors.email?.message}
          showError={true}
          required
        />
        <br></br><br></br>

        <Input
          placeholder="Enter Mobile No Here..."
          label="Mobile No"
          variant="outlined"
          registeredEvents={register('mobile_no')}
          name="mobile_no"
          type="text"
          error={errors.mobile_no?.message}
          showError={true}
          required
        />
        <br></br><br></br>

        {/* BankName */}
        <Input
          placeholder="Enter Bank Name Here..."
          label="Bank Name"
          variant="outlined"
          registeredEvents={register('bankName')}
          name="bankName"
          type="text"
          error={errors.bankName?.message}
          showError={true}
          required
        />
        <br></br><br></br>

        <Input
          placeholder="Enter Address Here..."
          label="Address"
          variant="outlined"
          registeredEvents={register('address')}
          name="address"
          type="text"
          error={errors.bankName?.message}
          showError={true}
          required
        />
        <br></br><br></br>

        <Input
          placeholder="Enter Branch Name Here..."
          label="Branch Name"
          variant="outlined"
          registeredEvents={register('branchName')}
          name="branchName"
          type="text"
          error={errors.branchName?.message}
          showError={true}
          required
        />
        <br></br><br></br>

        <Button 
          type='button' 
          label='submit' 
          color='secondary' 
          onClick={handleSubmit(onSubmit)} 
          />
        </form>

    </div>
  );
};

export default AddEmployee;