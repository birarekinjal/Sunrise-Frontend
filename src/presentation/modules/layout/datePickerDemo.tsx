// import { Checkbox, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
// import {  Table } from '../../../infrastructure/components/index';
import Table from '../../../infrastructure/components/table/customTable';
// import { rows } from '../../../infrastructure/components/table/tableConstant';


const DatePickerDemo = () => {
  // const [ids, setIds] = React.useState<Array<number>>([]);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);



  // // this function will return the page number
  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number,
  // ) => {
  //   setPage(newPage);
  // };


  // // This function will return the Row count of per page
  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };


  // This function will return the particular ID of entire 
  // const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('event', event.target.value);
  //   const selectedId = parseInt(event.target.value);
  //   if (ids.includes(selectedId)) {
  //     const newIds = ids.filter((id:any) => id !== selectedId);
  //     setIds(newIds);
  //   } else {
  //     const newIds = [...ids];
  //     newIds.push(selectedId);
  //     setIds(newIds);
  //   }
  // };

  // const getPagination = () => {
  //   return rowsPerPage > 0
  //     ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //     : rows;
  // };


  // const handleSelectAll = () => {
  //   var id:any = [];
  //   rows.map((value:any)=>{
  //     id.push(value.id);
  //   });
  //   setIds(id);
  // };

  // const handleSelectAllData = (ids:any) => {
  //   console.table('data', ids);
  // };

  // const handleSelect = (ids:any) => {
  //   console.table('ids', ids);
  // };


  return (
    <>
{/* 
      <Table
      pageCount={rows.length}
      rowsPerPage={rowsPerPage} 
      page={page}
      handleChangePage={handleChangePage} 
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleSelectAll={handleSelectAll}
      >
        {getPagination().map((row) => (
                <TableRow key={row.name}>
                     <Checkbox  
            color="primary" 
            onChange={selectUser}
            value={row.id}
            checked={ids.includes(row.id) ? true : false}
            />
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                </TableRow>
        ))}
        </Table> */}
        <Table
         isCheckbox 
        //  handleSelectAllData={handleSelectAllData}
        //  handleSelect={handleSelect}
         />
    </>
  );
};

export default DatePickerDemo;
