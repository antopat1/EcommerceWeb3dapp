import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state interface
interface SearchState {
  query: string;
  data: any[];
  isLoading: boolean;
  isError: boolean;
  count: number;
}

// Initial state
const initialState: SearchState = {
  query: "arti", // Default query
  data: [],
  isLoading: false,
  isError: false,
  count: 0
};

// Create the slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Set search query
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // Set error state
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    // Set search results
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
      state.count = action.payload ? action.payload.length : 0;
    }
  }
});

export const { 
  setQuery, 
  setLoading, 
  setError, 
  setSearchResults 
} = searchSlice.actions;

export default searchSlice.reducer;