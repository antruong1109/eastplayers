import { createSlice } from "@reduxjs/toolkit";

const initialState = { step: 1 };

const createAppointmentSlice = createSlice({
  name: "createAppointment",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { nextStep, prevStep } = createAppointmentSlice.actions;
export default createAppointmentSlice.reducer;
