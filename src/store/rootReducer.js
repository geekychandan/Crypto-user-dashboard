import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
// import { accountReducer, transactionReducer } from "./reducers/accountReducer";
// import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
//   account: accountReducer,
//   transactions: transactionReducer
});

export default rootReducer;
