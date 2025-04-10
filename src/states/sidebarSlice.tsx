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
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
