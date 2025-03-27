import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async () => {
  const response = await fetch("/api/auth");
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
