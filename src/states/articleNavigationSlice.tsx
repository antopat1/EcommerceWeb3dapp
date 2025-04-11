import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleNavState {
  currentArticles: any[] | null;
  currentIndex: number;
}

const initialState: ArticleNavState = {
  currentArticles: null,
  currentIndex: -1
};

const articleNavigationSlice = createSlice({
  name: "articleNavigation",
  initialState,
  reducers: {
    setCurrentArticles: (state, action: PayloadAction<any[] | null>) => {
      state.currentArticles = action.payload;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    }
  }
});

export const { setCurrentArticles, setCurrentIndex } = articleNavigationSlice.actions;
export default articleNavigationSlice.reducer;