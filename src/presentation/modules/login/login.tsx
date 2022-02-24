import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, Input } from '../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { constants } from '../../../application/constants/constant';
import schema from '../../schema/login';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email:
        localStorage.isChecked === 'true' && localStorage.username
          ? localStorage.username
          : '',
      password: '',
      rememberMe:
        localStorage.isChecked === 'true' && localStorage.username
          ? JSON.parse(localStorage.isChecked)
          : false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const { email, rememberMe } = data;
    //  add parameter and check output
    localStorage.setItem('username', email);
    localStorage.setItem('isChecked', rememberMe);
    reset();
  };

  const handleClickShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  const {
    emailPlaceholder,
    passwordPlaceholder,
    rememberMePlaceholder,
    buttons,
    title,
    forgotPassword,
  } = constants.loginPage;

  return (
    <div>
      <h1>{title}</h1>
      <form>
        {/* Email */}
        <label htmlFor='email' className='form-label'>
          {emailPlaceholder}
        </label>
        <br></br>
        <Input
          placeholder={emailPlaceholder}
          label='Email'
          variant='outlined'
          registeredEvents={register('email')}
          name='email'
          type='email'
          error={errors.email?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        {/* Password */}
        <label htmlFor='password' className='form-label'>
          {passwordPlaceholder}
        </label>
        <br></br>
        <Input
          placeholder={passwordPlaceholder}
          id='password'
          label='Password'
          variant='outlined'
          className='form-control'
          registeredEvents={register('password')}
          name='password'
          type='password'
          error={errors.password?.message}
          showError={true}
          inputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'>
                  {hidePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <br></br>
        <br></br>
        {/* checkbox */}
        <Controller
          name='rememberMe'
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              label={rememberMePlaceholder}
              color='secondary'
            />
          )}
        />{' '}
        <br></br>
        <br></br>
        <p>
          <a href='/resetPassword' id='link' rel='nofollow'>
            {forgotPassword}
          </a>
        </p>
        <br></br>
        <Button
          type='button'
          label={buttons.login}
          color='secondary'
          data_testid='button'
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
};

export default Login;
