import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  isConnected: boolean;
  balance: string | null;
  address: string | null;
}

const initialState: WalletState = {
  isConnected: false,
  balance: null,
  address: null
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletConnection: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setWalletBalance: (state, action: PayloadAction<string | null>) => {
      state.balance = action.payload;
    },
    setWalletAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    }
  }
});

export const { setWalletConnection, setWalletBalance, setWalletAddress } = walletSlice.actions;
export default walletSlice.reducer;