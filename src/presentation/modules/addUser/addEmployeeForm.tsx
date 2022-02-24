import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Input,
  SelectDropdown,
} from '../../../infrastructure/components';
import schema from './schema/addEmployee';
import {
  options,
  country,
  state,
} from '../../../application/constants/addUserConstant';
import { yupResolver } from '@hookform/resolvers/yup';
import { constants } from '../../../application/constants/constant';

const AddEmployeeForm = (props: any) => {
  const { handleOnSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    // reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      fistName: '',
      lastName: '',
      ifscCode: '',
      email: '',
      mobile_no: '',
      bankName: '',
      address: '',
      branchName: '',
      pinCode: '',
      city: '',
      accountHolderName: '',
      state: '',
      country: '',
      accountNumber: '',
      designation: '',
      secretary: '',
      confirmAccountNumber: '',
    },
    resolver: yupResolver(schema),
  });

  const {
    accountLabel,
    accountNumberLabel,
    accountNumberPlaceholder,
    accountPlaceholder,
    addressLabel,
    addressPlaceholder,
    bankNameLabel,
    bankNamePlaceholder,
    branchNameLabel,
    branchNamePlaceholder,
    cityLabel,
    cityNamePlaceholder,
    countryLabel,
    designationLabel,
    designationPlaceholder,
    emailLabel,
    emailPlaceholder,
    firstNameLabel,
    firstNamePlaceholder,
    ifscCodePlaceholder,
    ifscLabel,
    lastNameLabel,
    lastNamePlaceholder,
    mobileNumberLabel,
    mobileNumberPlaceholder,
    pincodeLabel,
    pincodePlaceholder,
    secretaryLabel,
    stateLabel,
    buttons,
  } = constants.addNewUser;

  return (
    <div>
      <form>
        <Input
          placeholder={firstNamePlaceholder}
          label={firstNameLabel}
          variant='outlined'
          registeredEvents={register('fistName')}
          name='fistName'
          type='text'
          error={errors.fistName?.message}
          showError={true}
          required
        />{' '}
        <br></br>
        <br></br>
        <Input
          placeholder={lastNamePlaceholder}
          label={lastNameLabel}
          variant='outlined'
          registeredEvents={register('lastName')}
          name='lastName'
          type='text'
          error={errors.lastName?.message}
          showError={true}
          required
        />{' '}
        <br></br>
        <br></br>
        <Input
          placeholder={ifscCodePlaceholder}
          label={ifscLabel}
          variant='outlined'
          registeredEvents={register('ifscCode')}
          name='ifscCode'
          type='text'
          error={errors.ifscCode?.message}
          showError={true}
          required
        />{' '}
        <br></br>
        <br></br>
        {/* Email */}
        <Input
          placeholder={emailPlaceholder}
          label={emailLabel}
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
        <Input
          placeholder={mobileNumberPlaceholder}
          label={mobileNumberLabel}
          variant='outlined'
          registeredEvents={register('mobile_no')}
          name='mobile_no'
          type='text'
          error={errors.mobile_no?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        {/* BankName */}
        <Input
          placeholder={bankNamePlaceholder}
          label={bankNameLabel}
          variant='outlined'
          registeredEvents={register('bankName')}
          name='bankName'
          type='text'
          error={errors.bankName?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Input
          placeholder={addressPlaceholder}
          label={addressLabel}
          variant='outlined'
          registeredEvents={register('address')}
          name='address'
          type='text'
          error={errors.bankName?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Input
          placeholder={branchNamePlaceholder}
          label={branchNameLabel}
          variant='outlined'
          registeredEvents={register('branchName')}
          name='branchName'
          type='text'
          error={errors.branchName?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Input
          placeholder={pincodePlaceholder}
          label={pincodeLabel}
          variant='outlined'
          registeredEvents={register('pinCode')}
          name='pincode'
          type='text'
          error={errors.pinCode?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Input
          placeholder={cityNamePlaceholder}
          label={cityLabel}
          variant='outlined'
          registeredEvents={register('city')}
          name='city'
          type='text'
          error={errors.city?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Controller
          name='state'
          control={control}
          render={({ field }) => (
            <SelectDropdown
              value={field.value}
              onChange={field.onChange}
              error={errors?.state?.message}
              showError={true}
              options={state}
              multiple={false}
              label={stateLabel}
            />
          )}
        />
        <br></br>
        <br></br>
        <Controller
          name='country'
          control={control}
          render={({ field }) => (
            <SelectDropdown
              value={field.value}
              onChange={field.onChange}
              error={errors?.country?.message}
              showError={true}
              options={country}
              multiple={false}
              label={countryLabel}
            />
          )}
        />
        <br></br>
        <br></br>
        <Input
          placeholder={accountPlaceholder}
          label={accountLabel}
          variant='outlined'
          registeredEvents={register('accountNumber')}
          name='accountNumber'
          type='text'
          error={errors.accountNumber?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Input
          placeholder={designationPlaceholder}
          label={designationLabel}
          variant='outlined'
          registeredEvents={register('designation')}
          name='designation'
          type='text'
          error={errors.designation?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Controller
          name='secretary'
          control={control}
          render={({ field }) => (
            <SelectDropdown
              value={field.value}
              onChange={field.onChange}
              error={errors.secretary?.message}
              showError={true}
              options={options}
              multiple={false}
              label={secretaryLabel}
            />
          )}
        />
        <br></br>
        <br></br>
        <Input
          placeholder={accountNumberPlaceholder}
          label={accountNumberLabel}
          variant='outlined'
          registeredEvents={register('confirmAccountNumber')}
          name='confirmAccountNumber'
          type='text'
          error={errors.confirmAccountNumber?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>
        <Button
          type='button'
          label={buttons.submit}
          color='secondary'
          onClick={handleSubmit(handleOnSubmit)}
        />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
