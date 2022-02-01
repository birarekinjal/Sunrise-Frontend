import React from 'react';
import TableRow from '@mui/material/TableRow';

type CustomTableRowProps = {
  children?: React.ReactNode;
  classes?: object;
  component?: any;
  hover?: boolean;
  selected?: boolean;
};

const CustomTableRow:React.FC<CustomTableRowProps> = ({
  children,
  classes,
  component,
  hover,
  selected,
}) => {
  console.log('demo');
  return (
    <TableRow 
    classes={classes} 
    component={component} 
    hover={hover} 
    selected={selected}
    >
      {children}
    </TableRow>
  );
};

export default CustomTableRow;
