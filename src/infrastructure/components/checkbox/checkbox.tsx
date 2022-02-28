import React from 'react';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import { CheckboxProps } from './checkboxModal';
import './checkbox.scss';

const CustomCheckBox: React.FC<CheckboxProps> = ({
  size,
  color,
  checked,
  disabled,
  defaultChecked,
  id,
  inputRef,
  required,
  value,
  onChange,
  label,
  isControlled,
  registeredEvents,
  data_testId,
}) => {
  return (
    <>
      <FormGroup>
        {isControlled ? (
            <>
              <Checkbox
                size={size}
                color={color}
                checked={checked}
                disabled={disabled}
                defaultChecked={defaultChecked}
                id={id}
                inputRef={inputRef}
                required={required}
                value={value}
                onChange={onChange}
                data-testid={data_testId}
              />
          {label}
            </>
          
        ) : (
          <>
              <Checkbox
                {...(registeredEvents || {})}
                size={size}
                color={color}
                checked={checked}
                disabled={disabled}
                defaultChecked={defaultChecked}
                id={id}
                required={required}
                value={value}
                onChange={onChange}
                data-testid={data_testId}
              />
            {label}
            </>
        )}
      </FormGroup>
    </>
  );
};

export default CustomCheckBox;
