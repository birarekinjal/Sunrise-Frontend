/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './application/redux/store/store';
import RoutesData from './presentation/routes/routes';
import './application/style/common.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RoutesData />
      </div>
    </Provider>
  );
}

export default App;
