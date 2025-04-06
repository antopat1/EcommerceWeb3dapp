import { http, createConfig } from "wagmi";
import { mainnet, sepolia, arbitrumSepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";
import { projectId } from "./utils/utils";

export const config = createConfig({
  chains: [mainnet, sepolia, arbitrumSepolia], 
  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http(), 
  },
});
