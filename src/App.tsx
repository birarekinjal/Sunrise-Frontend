/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './application/redux/store/store';
import RoutesData from './presentation/routes/routes';
import './application/style/main.scss';

function App() {
  console.log("hiii test")
  return (
    <Provider store={store}>
      <div className="App">
        <RoutesData />
      </div>
    </Provider>
  );
}

export default App;
