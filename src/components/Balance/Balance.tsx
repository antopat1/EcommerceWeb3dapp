import React, { useEffect, useState } from "react";
import styles from "./Balance.module.css";
import { BrowserProvider, formatEther } from "ethers";

const Balance: React.FC = () => {
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

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
            setBalance(formatted);
            setIsConnected(true);
          } else {
            setIsConnected(false);
          }
        } catch (error) {
          console.error("Errore nel controllo della connessione:", error);
          setIsConnected(false);
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
  }, []);

  if (!isConnected || balance === null) return null;
  
  return (
    <div className={styles.balanceContainer}>
      <p className={styles.balanceText}>Saldo disponibile: {balance} ETH</p>
    </div>
  );
};

export default Balance;