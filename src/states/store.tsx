import { configureStore } from "@reduxjs/toolkit";
import searchbarReducer from "./searchBarShownSlice";
import sidebarReducer from "./sidebarSlice";
import scrollReducer from "./scrollSlice";
import purchaseReducer from "./purchaseSlice";
import articleNavigationReducer from "./articleNavigationSlice";
import walletReducer from "./walletSlice";

const store = configureStore({
  reducer: {
    searchbar: searchbarReducer,
    sidebar: sidebarReducer, 
    scroll: scrollReducer,
    purchase: purchaseReducer,
    articleNavigation: articleNavigationReducer,
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;