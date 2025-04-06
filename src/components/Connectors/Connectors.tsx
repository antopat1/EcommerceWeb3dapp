import React from "react";
import ConnectorsCSS from "./Connectors.module.css";

import { useAccount, useConnect } from "wagmi";
import { disconnect } from "wagmi/actions";
import { config } from "../../config";
import { Link } from "react-router-dom";

const Connectors: React.FC = () => {
  
  const account = useAccount();
  const { connectors, connect, status } = useConnect();

  const handleWalletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConnector = connectors.find(
      (connector) => connector.uid === event.target.value
    );
    if (selectedConnector) {
      connect({ connector: selectedConnector });
    }
  };

  return (
    <React.StrictMode>
      {account.status == "disconnected" ? (
        <div className={ConnectorsCSS.containerWallet}>
          <select defaultValue={"Select Wallet"} onChange={handleWalletChange}>
            <option>Select Wallet</option>
            {connectors.map((connector) => (
              <option key={connector.uid} value={connector.uid}>
                {connector.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className={ConnectorsCSS.containerAccountInfo}>
          {status == "pending" ? (
            <div>
              <em>Waiting...</em>
            </div>
          ) : (
            <div className={ConnectorsCSS.accountInfo}>
              <p>
                <Link to={"/account"}>
                  {`${account.address?.slice(0, 4)}...${account.address?.slice(
                    -4
                  )}`}
                </Link>
              </p>
              <button onClick={() => disconnect(config)}>Disconnect</button>
            </div>
          )}
        </div>
      )}
    </React.StrictMode>
  );
};

export default Connectors;


