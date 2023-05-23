import bookingReducer from "features/Booking/redux/bookingSlice";
import loginReducer from "features/Login/redux/loginSlice";
import adminReducer from "features/Admin/redux/adminSlice";
import { configureStore } from "@reduxjs/toolkit";

const store  = configureStore({
  reducer:{
    booking: bookingReducer,
    user: loginReducer,
    admin: adminReducer,
  }
});


export default store;
