import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { FullScreenLoader } from '../../infrastructure/components';
import PrivateRoute from './privateRoute';
const ListTodo = lazy(() => import('../modules/todo/listTodo/listTodo'));
const User = lazy(() => import('../modules/users/user'));
const Layout = lazy(() => import('../modules/layout/layout'));
const DatePickerDemo = lazy(() => import('../../presentation/modules/layout/datePickerDemo'));
const PageNotFound = lazy(() => import('../../infrastructure/components/pageNotFound/PageNotFound'));

const ScrollToTop = (props: { children: any; }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return props.children;
};

function RoutesData() {
  return (
    <Router>
      <Suspense fallback={<FullScreenLoader />}>
        <ScrollToTop>
          <Fragment>
            <Routes>
              <Route path="/todo-list" element={<ListTodo />} />
              <Route path="/user" element={<PrivateRoute isAuthenticated={true} component={User} />} />
              <Route path="/" element={<ListTodo />} />
              <Route path="/layout" element={<Layout />} />
              <Route path="/demo" element={<DatePickerDemo />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Fragment>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default RoutesData;
