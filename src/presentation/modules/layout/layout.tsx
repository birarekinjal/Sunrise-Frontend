import { Visibility } from '@material-ui/icons';
import React, { useState } from 'react';
import { 
  Button, 
  Checkbox, 
  CheckboxDropdown, 
  Input, 
  Modal, 
  SelectDropdown, 
  Loader, 
  Tabs,
  FullScreenLoader,
} from '../../../infrastructure/components';
import Send from '@mui/icons-material/Send';
import { offerLabel } from '../../../application/constants/svgConstants';
import { options } from '../../../application/constants/constant';


const Layout = () => {
  const [selectOption, setSelectOption] = useState<string>('');

  const handleChange = (selected: any) => {
    setSelectOption(selected);
  };

  const getFormattedDropDownListData = (optionsData:any, label:string, value:any) =>
    optionsData && optionsData.length > 0
      ? optionsData.map((item:any) => ({
        label: item[label],
        value: item[value],
      }))
      : [];

  const dropDownOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const modalFooterButtons = [
    {
      label: 'Cancel',
      color: 'primary',
      variant: 'outlined',
      className: 'customFilledBtn',
      // onClick: handleClick,
    },
    {
      label: 'Save',
      color: 'primary',
      className: 'customFilledBtn',
      // onClick: handleClick,
    },
  ];

  const HandleToast = () => {
    return (
      <h1>ReactJS</h1>
    );
  };
  const Botree = () => {
    return (
      <h1>Botree</h1>
    );
  };

  const TabsConstant = [
    {
      value: '1',
      label: 'React js',
      disabled: false,
      component: <HandleToast />,
      // icon: <DeleteIcon />,
      iconPosition: 'start',
    },
    {
      value: '2',
      label: 'Botree',
      // icon: <DeleteIcon />,
      iconPosition: 'end',
      component: <Botree />,
    },
    {
      value: '3',
      label: 'Java',
      disabled: true,
      component: <HandleToast />,
    },
    {
      value: '4',
      label: 'Dajngo',
      component: <Botree />,
    },
  ];

  return (
    <div>
      <>
      <h1>FullScreenLoader</h1>
      <FullScreenLoader color='secondary' label='Show Loader' />
      <h1>Tabs</h1>
      <Tabs data={TabsConstant} /><br></br><br></br>
      <h1>Loader</h1>
      <Loader color='secondary'/>
      {/* <Loader color='primary' thickness={1.5}/>
      <Loader color='secondary' thickness={15} /> */}
      <br></br><br></br>
      <h1>Select dropdown</h1>
      <SelectDropdown 
      options={getFormattedDropDownListData(dropDownOptions, 'label', 'value')} 
      onChange={(fData:any) => {
        setSelectOption(fData?.value);
      }}
      
      />
       <h1>Select dropdown with Multiple</h1>
      <SelectDropdown 
      options={getFormattedDropDownListData(dropDownOptions, 'label', 'value')} 
      onChange={(fData:any) => {
        setSelectOption(fData?.value);
      }}
      isMulti={true}
      />

     <h1> Button Component </h1>

        <h1>Using Color</h1>

        <Button
          label="inherit"
          color="inherit"
          onClick={() => alert('inherit')}
        />
        <Button
          label="primary"
          color="primary"
          onClick={() => alert('primary')}
        />
        <Button
          label="secondary"
          color="secondary"
          onClick={() => alert('secondary')}
        />
        <Button
          label="success"
          color="success"
          onClick={() => alert('success')}
        />
        <Button label="error" color="error" onClick={() => alert('error')} />
        <Button label="info" color="info" onClick={() => alert('info')} />
        <Button
          label="warning"
          color="warning"
          onClick={() => alert('warning')}
        />
        <br></br>
        <br></br>
        <h1>Variant outlined</h1>
        <Button
          label="inherit"
          color="inherit"
          variant="outlined"
          onClick={() => alert('inherit')}
        />
        <Button
          label="primary"
          color="primary"
          variant="outlined"
          onClick={() => alert('primary')}
        />
        <Button
          label="secondary"
          color="secondary"
          variant="outlined"
          onClick={() => alert('secondary')}
        />
        <Button
          label="success"
          color="success"
          variant="outlined"
          onClick={() => alert('success')}
        />
        <Button
          label="error"
          color="error"
          variant="outlined"
          onClick={() => alert('error')}
        />
        <Button
          label="info"
          color="info"
          variant="outlined"
          onClick={() => alert('info')}
        />
        <Button
          label="warning"
          color="warning"
          variant="outlined"
          onClick={() => alert('warning')}
        />
        <br></br>
        <br></br>
        <h1>Append Icons</h1>
        <Button
          label="inherit"
          color="inherit"
          variant="text"
          onClick={() => alert('inherit')}
        />
        <Button
          label="primary"
          color="primary"
          variant="text"
          onClick={() => alert('primary')}
        />
        <Button
          label="secondary"
          color="secondary"
          variant="text"
          onClick={() => alert('secondary')}
        />
        <Button
          label="success"
          color="success"
          variant="text"
          onClick={() => alert('success')}
        />
        <Button
          label="error"
          color="error"
          variant="text"
          onClick={() => alert('error')}
        />
        <Button
          label="info"
          color="info"
          variant="text"
          onClick={() => alert('info')}
        />
        <Button
          label="warning"
          color="warning"
          variant="text"
          onClick={() => alert('warning')}
        />
        <br></br>
        <br></br>

        <h1>Prepend Icon</h1>
        <Button
          label="inherit"
          color="inherit"
          // startIcon={<Visibility/>}
          withStartSvg={offerLabel}
          withEndSvg={offerLabel}
          onClick={() => alert('inherit')}
        />
        <Button
          label="primary"
          color="primary"
          startIcon={<Visibility />}
          onClick={() => alert('primary')}
        />
        <Button
          label="secondary"
          color="secondary"
          startIcon={<Visibility />}
          onClick={() => alert('secondary')}
        />
        <Button
          label="success"
          color="success"
          startIcon={<Visibility />}
          onClick={() => alert('success')}
        />
        <Button
          label="error"
          color="error"
          startIcon={<Visibility />}
          onClick={() => alert('error')}
        />
        <Button
          label="info"
          color="info"
          startIcon={<Visibility />}
          onClick={() => alert('info')}
        />
        <Button
          label="warning"
          color="warning"
          startIcon={<Visibility />}
          onClick={() => alert('warning')}
        />
        <br></br>
        <br></br>

        <h1>Append Icon</h1>
        <Button
          label="inherit"
          color="inherit"
          endIcon={<Send />}
          onClick={() => alert('inherit')}
        />
        <Button
          label="primary"
          color="primary"
          endIcon={<Send />}
          onClick={() => alert('primary')}
        />
        <Button
          label="secondary"
          color="secondary"
          endIcon={<Send />}
          onClick={() => alert('secondary')}
        />
        <Button
          label="success"
          color="success"
          endIcon={<Send />}
          onClick={() => alert('success')}
        />
        <Button
          label="error"
          color="error"
          endIcon={<Send />}
          onClick={() => alert('error')}
        />
        <Button
          label="info"
          color="info"
          endIcon={<Send />}
          onClick={() => alert('info')}
        />
        <Button
          label="warning"
          color="warning"
          endIcon={<Send />}
          onClick={() => alert('warning')}
        />
        <br></br>
        <br></br>

        <h1>With Loader</h1>
        <Button
          label="inherit"
          color="inherit"
          isLoading
          onClick={() => alert('inherit')}
        />
        <Button
          label="primary"
          color="primary"
          isLoading
          onClick={() => alert('primary')}
        />
        <Button
          label="secondary"
          color="secondary"
          isLoading
          onClick={() => alert('secondary')}
        />
        <Button
          label="success"
          color="success"
          isLoading
          onClick={() => alert('success')}
        />
        <Button
          label="error"
          color="error"
          isLoading
          onClick={() => alert('error')}
        />
        <Button
          label="info"
          color="info"
          isLoading
          onClick={() => alert('info')}
        /><br></br><br></br>

      <h1>Input with type and required props</h1>
      <Input type='text'  required placeholder='Enter Text..' label='Enter Text' name='text' /><br></br><br></br>

      <h1>Input with multiline props</h1>
      <Input type='text' maxRows='10' multiLine={true} color='primary' placeholder='Enter Text..' label='Enter Text' name='text' /><br></br><br></br>
    
      <br></br><br></br>
      <h1>Normal Modal</h1>
      <Modal buttons={modalFooterButtons} title='Heading'>
        <div>Modal with Footer Button</div>
      </Modal>

        <h1> Check Box</h1>
        <Checkbox color='default' label='default' checked size='small' />

        <CheckboxDropdown
          options={options}
          onChange={handleChange}
          allowSelectAll={true}
          value={selectOption}
        />



      </>
    </div>
  );
};

export default Layout;