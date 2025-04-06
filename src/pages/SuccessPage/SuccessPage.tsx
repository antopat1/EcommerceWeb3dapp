import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styles from "./SuccessPage.module.css";
import useFetch from "../../customHook/useFetch";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

interface PurchaseI {
  articleId: string;
  articleName: string;
  price: string;
  buyerAddress: string;
  txHash: string;
  chainId?: number;
  timestamp: number;
}

const SuccessPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useFetch(`i=${id}`);
  const [purchase, setPurchase] = useState<PurchaseI | null>(null);

  useEffect(() => {
    // Recupera i dettagli dell'acquisto dal localStorage
    const purchasesJSON = localStorage.getItem("articlePurchases");
    if (purchasesJSON) {
      const purchases: PurchaseI[] = JSON.parse(purchasesJSON);
      const foundPurchase = purchases.find((p) => p.articleId === id);
      if (foundPurchase) {
        setPurchase(foundPurchase);
      } else {
        // Se non viene trovato l'acquisto, reindirizza alla home
        navigate("/");
      }
    } else {
      // Se non ci sono acquisti, reindirizza alla home
      navigate("/");
    }
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Loading />
      </div>
    );
  }

  if (isError || !data.articles || data.articles.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <header>
            <Link to="/">
              <IoArrowBackCircleSharp className={styles.icon} />
            </Link>
            <h4 className={styles.backArrow}>Torna in Home</h4>
          </header>
          <ErrorMessage>Articolo Non Disponibile</ErrorMessage>
        </div>
      </div>
    );
  }

  // Trova l'articolo nei dati
  const article = data.articles.find((article) => article.idArticle === id);

  if (!article || !purchase) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <header>
            <Link to="/">
              <IoArrowBackCircleSharp className={styles.icon} />
            </Link>
            <h4 className={styles.backArrow}>Torna in Home</h4>
          </header>
          <ErrorMessage>Informazioni sull'acquisto non trovate</ErrorMessage>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.showPageContainer}>
        <img
          className={styles.abstractIMG}
          src="https://bafkreiab6xms6xrp3bpqcypfyewujxjc6tdfy672x5ocigrdl4dwbsylbq.ipfs.dweb.link/"
          alt="Abstract Background"
        />

        <h2>
          Hai acquistato con successo <br /> {article.strArticle}
        </h2>

        <div className={styles.containerIMG}>
          <img src={article.strArticleThumb} alt={article.strArticle} />
        </div>

        <div className={styles.purchaseDetails}>
          <p>Prezzo pagato: {purchase.price} ETH</p>
          <p>
            Id_Tx:&nbsp;  
            <a
              href={`https://sepolia.etherscan.io/tx/${purchase.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {purchase.txHash.slice(0, 40)}...
              <br />
              ..{purchase.txHash.slice(-26)}
            </a>
          </p>
          <p>Data: {new Date(purchase.timestamp).toLocaleString()}</p>
        </div>

        <div className={styles.buttonsContainer}>
          <Link to="/">
            <button>Torna alla Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
