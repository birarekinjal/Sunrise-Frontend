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
import { Dashboard } from '../modules/Dashboard/index';

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
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesData;
