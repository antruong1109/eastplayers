import { createSlice } from "@reduxjs/toolkit";

const initialState = { sidebarExpand: true, darkMode: true };

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarExpand = !state.sidebarExpand;
    },
  },
});

export const { toggleSidebar } = settingSlice.actions;
export default settingSlice.reducer;
