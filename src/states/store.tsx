import { configureStore } from "@reduxjs/toolkit";
import searchbarReducer from "./searchBarShownSlice";
import sidebarReducer from "./sidebarSlice";
import scrollReducer from "./scrollSlice";

const store = configureStore({
  reducer: {
    searchbar: searchbarReducer,
    sidebar: sidebarReducer, 
    scroll: scrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
