import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSideBar, closeSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
