import React from 'react';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxProps } from './checkboxModal';

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
}) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
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
            />
          }
          label={label}
        />
      </FormGroup>
    </>
  );
};

export default CustomCheckBox;
