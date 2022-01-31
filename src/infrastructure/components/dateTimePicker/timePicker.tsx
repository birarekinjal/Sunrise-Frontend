import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { DateTimePickerProps } from './dateTimePickerModal';
import { Controller } from 'react-hook-form';

const CustomTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  className,
  disabled,
  clearable,
  clearText,
  desktopModeMediaQuery,
  mask,
  open,
  // value,
  // onChange,
  orientation,
  timeOpenTo,
  readOnly,
  timeViews,
  // timeControl,
  // timeName,
  control,
  name,
}) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <TimePicker
            label={label}
            className={className}
            orientation={orientation}
            openTo={timeOpenTo}
            readOnly={readOnly}
            disabled={disabled}
            clearText={clearText}
            clearable={clearable}
            desktopModeMediaQuery={desktopModeMediaQuery}
            mask={mask}
            open={open}
            value={value}
            onChange={onChange}
            views={timeViews}
            ref={ref}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
