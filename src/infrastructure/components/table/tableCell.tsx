import React from 'react';
import TableCell from '@mui/material/TableCell';

type CustomTableCellProps = {
  align?:'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right';
  children?: React.ReactNode;
  classes?: object;
  component?: any;
  padding?: 'checkbox'
  | 'none'
  | 'normal';
  scope?: string;
  size?: 'small'
  | 'medium';
  sortDirection?: 'asc'
  | 'desc'
  | false;
  variant?: 'body'
  | 'footer'
  | 'head';
};

const CustomTableCell:React.FC<CustomTableCellProps> = ({
  align,
  children,
  classes,
  component,
  padding,
  scope,
  size,
  sortDirection,
  variant,
}) => {
  return (
    <TableCell 
    align={align} 
    classes={classes} 
    component={component}
    padding={padding}
    scope={scope}
    size={size}
    sortDirection={sortDirection}
    variant={variant}
    >
      {children}
    </TableCell>
  );
};

export default CustomTableCell;
