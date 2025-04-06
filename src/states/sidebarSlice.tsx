import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  showSidebar: boolean;
}

const initialState: SidebarState = {
  showSidebar: false, // Sidebar chiusa di default
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    // openSidebar: (state) => {
    //   state.showSidebar = true;
    // },
    // closeSidebar: (state) => {
    //   state.showSidebar = false;
    // },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
