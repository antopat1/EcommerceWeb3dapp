import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PurchaseI {
  articleId: string;
  articleName: string;
  price: string;
  buyerAddress: string;
  txHash: string;
  chainId?: number;
  timestamp: number;
}

interface PurchaseState {
  purchases: PurchaseI[];
  isPurchasing: boolean;
  error: { errorName: string; errorMessage: string } | null;
}

const initialState: PurchaseState = {
  purchases: [],
  isPurchasing: false,
  error: null
};

// Carica gli acquisti dal localStorage durante l'inizializzazione
const loadPurchasesFromLocalStorage = (): PurchaseI[] => {
  if (typeof window !== "undefined") {
    const purchasesJSON = localStorage.getItem("articlePurchases");
    return purchasesJSON ? JSON.parse(purchasesJSON) : [];
  }
  return [];
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    ...initialState,
    purchases: loadPurchasesFromLocalStorage()
  },
  reducers: {
    setPurchasing: (state, action: PayloadAction<boolean>) => {
      state.isPurchasing = action.payload;
    },
    setError: (state, action: PayloadAction<{ errorName: string; errorMessage: string } | null>) => {
      state.error = action.payload;
    },
    addPurchase: (state, action: PayloadAction<PurchaseI>) => {
      state.purchases.push(action.payload);
      // Salva nel localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("articlePurchases", JSON.stringify(state.purchases));
      }
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { setPurchasing, setError, addPurchase, clearError } = purchaseSlice.actions;
export default purchaseSlice.reducer;