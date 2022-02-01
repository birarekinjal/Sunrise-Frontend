import React from 'react';
import TableContainer from '@mui/material/TableContainer';


type CustomTableContainerProps = {
  children?: React.ReactNode;
  classes?: object;
  component?: any;
};

const CustomTableContainer:React.FC<CustomTableContainerProps> = ({
  children,
  classes,
  component,
}) => {
  return (
    <TableContainer classes={classes} component={component} >
      {children}
    </TableContainer>
  );
};

export default CustomTableContainer;
