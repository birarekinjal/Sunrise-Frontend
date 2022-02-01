import React from 'react';
import TableFooter from '@mui/material/TableFooter';

type TableFooterProps = {
  children?: React.ReactNode;
  classes?: object;
  component?: any;
};

const CustomTableFooter:React.FC<TableFooterProps> = ({
  children,
  classes,
  component,
}) => {
  return (
    <TableFooter classes={classes} component={component}>
      {children}
    </TableFooter>
  );
};

export default CustomTableFooter;
