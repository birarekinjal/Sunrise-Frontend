import React from 'react';
import TableBody from '@mui/material/TableBody';

type CustomTableBodyProps = {
  children?: React.ReactNode;
  classes?: object;
  component?: any;
};

const CustomTableBody:React.FC<CustomTableBodyProps> = ({
  children,
  classes,
  component,
}) => {
  return (
    <TableBody classes={classes} component={component}>
      {children}
    </TableBody>
  );
};

export default CustomTableBody;
