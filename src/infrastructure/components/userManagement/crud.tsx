/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useFetchAPIActionData } from '../../../application/hooks/useApiActionHooks';
import { apiHooksValues } from '../../../application/models/apiDataModels';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usersListValues } from '../../../presentation/modules/users/models/users';

const crud = ({
  apiFunction,
  apiParams,
  dependencyArray,
  apiCallCondition = true,
  defaultResponseValue,
  // hideErrorMessage,
  // errorMessage,
  // showSuccessMessage,
  // successMessage,
}: apiHooksValues) => {

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }



  const [{ data: usersDetails = [], isLoading: isUsersDetailsAPILoading }] = useFetchAPIActionData({
    apiFunction: apiFunction,
    defaultResponseValue: defaultResponseValue,
    dependencyArray: dependencyArray,
    apiParams: apiParams,
    apiCallCondition: apiCallCondition,
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(isUsersDetailsAPILoading) && 'Loading '
              || (usersDetails && usersDetails.length > 0)
              ? usersDetails.map((item: usersListValues, key: number) => (
                <TableRow
                  key={'0'}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.username}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.website}</TableCell>
                </TableRow>
              )) : 'No Data Found'}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default crud;