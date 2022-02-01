import React from 'react';
import TableHead from '@mui/material/TableHead';

type CustomTableHeadProps = {
  children?: React.ReactNode;
  classes?: object;
  component?: any;
};

const CustomTableHead:React.FC<CustomTableHeadProps> = ({
  children,
  classes,
  component,
}) => {
  return (
   <TableHead classes={classes} component={component}>
     {children}
   </TableHead>
  );
};

export default CustomTableHead;
