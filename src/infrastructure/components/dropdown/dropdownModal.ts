// export type selectDropdown = {
//   id?: any;
//   labelText?: string;
//   onBlur?: any;
//   defaultValue?: any;
//   placeholder?: string;
//   options?: any;
//   error?: any;
//   disabled?: boolean;
//   onChange?: any;
//   name?: string;
//   isMulti?: boolean;
//   closeMenuOnSelect?: boolean;
//   isRequired?: boolean;
//   inputRef?: any;
//   value?: any;
//   hideSelectedOptions?:boolean;
// };


export type SelectDropdownProps = {
  names?: any;
  label?: string;
  isCheckbox?: boolean;
  isMultiple?: boolean;
  value?: any;
  onChange?: any;
  children?: any;
  renderValue?: any;
  options?: any;
  multiple?: boolean;
  error?: any;
  showError?: boolean;
};