import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Balance.module.css";
import { BrowserProvider, formatEther } from "ethers";
import { setWalletConnection, setWalletBalance, setWalletAddress } from "../../states/walletSlice";
import { RootState, AppDispatch } from "../../states/store";

const Balance: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isConnected, balance } = useSelector((state: RootState) => state.wallet);

  useEffect(() => {
    const checkIfConnected = async (): Promise<void> => {
      if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        try {
          const provider = new BrowserProvider(window.ethereum);
          
          // Verifica solo gli account già connessi senza richiedere una connessione
          const accounts: string[] = await provider.send("eth_accounts", []);
          
          if (accounts.length > 0) {
            const balanceBigInt = await provider.getBalance(accounts[0]);
            const formatted = formatEther(balanceBigInt);
            dispatch(setWalletBalance(formatted));
            dispatch(setWalletAddress(accounts[0]));
            dispatch(setWalletConnection(true));
          } else {
            dispatch(setWalletConnection(false));
            dispatch(setWalletAddress(null));
          }
        } catch (error) {
          console.error("Errore nel controllo della connessione:", error);
          dispatch(setWalletConnection(false));
          dispatch(setWalletAddress(null));
        }
      }
    };
    
    checkIfConnected();
    
    // Aggiungi listener per eventuali cambiamenti di account o catena
    const handleAccountsChanged = () => {
      checkIfConnected();
    };
    
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleAccountsChanged);
    }
    
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleAccountsChanged);
      }
    };
  }, [dispatch]);

  if (!isConnected || balance === null) return null;
  
  return (
    <div className={styles.balanceContainer}>
      <p className={styles.balanceText}>Saldo disponibile: {balance} ETH</p>
    </div>
  );
};

export default Balance;