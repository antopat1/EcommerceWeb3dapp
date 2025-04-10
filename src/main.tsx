import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { WagmiProvider } from "wagmi"; // Importa il provider di Wagmi
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Importa React Query
import { config } from "./config"; 
import App from "./App";
import store from "./states/store";
import "./index.css";

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <WagmiProvider config={config}>
        <Provider store={store}>
          <App />
        </Provider>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


