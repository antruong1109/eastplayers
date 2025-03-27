import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import settingReducer from "./features/settingSlice";
import createAppointmentReducer from "./features/appointment/createAppointmentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    setting: settingReducer,
    createAppointment: createAppointmentReducer,
  },
});
