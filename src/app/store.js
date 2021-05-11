import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import orderReducer from '../reducers/orderReducer';
 
export default configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
  },
});
