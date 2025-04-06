// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux"; // Importa Provider da "react-redux"
// import App from "./App"; 
// import store from "./states/store"; // Importa lo store configurato

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { WagmiProvider } from "wagmi"; // Importa il provider di Wagmi
// import { config } from "./config"; 
// import App from "./App";
// import store from "./states/store";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <WagmiProvider config={config}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </WagmiProvider>
//   </React.StrictMode>
// );



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


