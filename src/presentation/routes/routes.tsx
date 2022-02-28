import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from '../modules/layout/layout';
import ListTodo from '../modules/todo/listTodo/listTodo';
import User from '../modules/users/user';
import DatePickerDemo from '../../presentation/modules/layout/datePickerDemo';
import { Login } from '../modules/login/index';
import { Dashboard } from '../modules/dashboard/index';
import { AddEmployeeForm } from '../modules/addUser/index';
import { ForgotPasswordForm } from '../modules/forgotPassword/index';
import { ResetPasswordForm } from '../modules/resetPassword/index';
import { CreateUserForm } from '../modules/user/index';

function RoutesData() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<User />} />
        <Route path="/todo-list" element={<ListTodo />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/demo" element={<DatePickerDemo/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addEmployee" element={<AddEmployeeForm />} />
        <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
        <Route path="/resetPassword" element={<ResetPasswordForm />} />
        <Route path="/createUser" element={<CreateUserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesData;
