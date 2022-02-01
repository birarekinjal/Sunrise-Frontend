import React from 'react';
import Table from '@mui/material/Table';

type TableProps = {
  children?: React.ReactNode;
  classes?: object;
  component?: any;
  padding?: 'checkbox'
  | 'none'
  | 'normal';
  size?: 'medium'
  | 'small';
  stickyHeader?: boolean;
};

const CustomTable:React.FC<TableProps> = ({
  children,
  component,
  classes,
  padding,
  size,
  stickyHeader,
}) => {
  return (
    <Table
    component={component}
    classes={classes}
    padding={padding}
    size={size}
    stickyHeader={stickyHeader}
    >
      {children}
      </Table>
  );
};

export default CustomTable;