import { combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from '../../presentation/modules/users/reducer/userReducer';
// import { HeaderReducer } from '../../presentation/layout/header/redux/headerReducer';


const rootReducer = combineReducers({
  users: usersReducer.reducer,
  // header:HeaderReducer,
});

export default rootReducer;
