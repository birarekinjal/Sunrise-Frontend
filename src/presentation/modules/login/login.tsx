import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import {  Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../schema/login'; 


const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

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
      email: '',
      password: '',
      checkbox:'',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
  //  add parameter and check output
    reset();
  };

  const handleClickShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div>
       <form>
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

        {/* Password */}
        <Input
          placeholder="Enter Password Here..."
          label="Password"
          variant="outlined"
          registeredEvents={register('password')}
          name="password"
          type="password"
          error={errors.password?.message}
          showError={true}
          inputProps={{ endAdornment:  <InputAdornment position="end">
          <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {hidePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>

        </InputAdornment> }}
          required
        />
        <br></br><br></br>

            {/* checkbox */}
      {/* <Controller
        name="checkbox"
        control={control}
        render={({ field }) => <Checkbox {...field}  label={'subject'} color='secondary'/>}
      /> <br></br><br></br> */}

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

export default Login;