import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { 
  Button, 
  Input, 
  NumberCount, 
  DatePicker, 
  TimePicker, 
  DateTimePicker,
  Switch,
  Checkbox,
} from '../../../infrastructure/components';


const AddForm = () => {

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
      email: '',
      password: '',
      count:'',
      date:'',
      time:'',
      dateTime:'',
      checkSwitch:'',
      checkbox:'',
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = () => {

    reset();
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
          // inputProps={{ endAdornment: handleIcon('end') }}
          required
        />
        <br></br><br></br>

        {/* Number  */}
        <NumberCount 
          placeholder='count' 
          label='ccc' 
          variant='outlined'
          registeredEvents={register('count')}
          name='count'
        /> <br></br><br></br>

        {/* Date picker */}
        <Controller 
          control={control}
          name={'date'}
          render={({ field: { onChange,  onBlur, value, ref } }) => (
            <DatePicker
            onChange={ onChange }
            value={value}
            onBlur={onBlur}
            ref={ref}
            />
          )}
        /> <br></br><br></br>


            {/* Time Picker */}
        <Controller 
            control={control}
            name={'time'}
            render={({ field: { onChange,  onBlur, value, ref } }) => (
              <TimePicker
              onChange={ onChange }
              value={value}
              onBlur={onBlur}
              ref={ref}
              />
            )}
          /> <br></br><br></br>


              {/* dateTime picker */}
        <Controller 
          control={control}
          name={'dateTime'}
          render={({ field: { onChange,  onBlur, value, ref } }) => (
            <DateTimePicker
              onChange={ onChange }
              value={value}
              onBlur={onBlur}
              ref={ref}
              />
          )}
         /> <br></br><br></br>

           {/* switch */}
        <Controller
          control={control}
          name={'checkSwitch'}
          render={({ field  }) => (
            <Switch {...field} />
          )}
        /> <br></br><br></br>


            {/* checkbox */}
      <Controller
        name="checkbox"
        control={control}
        render={({ field }) => <Checkbox {...field}  label={'subject'} color='secondary'/>}
      /> <br></br><br></br>



        <Button type="button" label="submit" onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};

export default AddForm;