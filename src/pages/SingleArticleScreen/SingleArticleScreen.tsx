import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa"; 
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5"; // Icone frecce laterali
import { useAccount, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../customHook/useFetch";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./SingleArticleScreen.module.css";

// Redux actions
import { setPurchasing, setError, addPurchase, clearError } from "../../states/purchaseSlice";
import { setCurrentArticles, setCurrentIndex } from "../../states/articleNavigationSlice";
import { RootState, AppDispatch } from "../../states/store";

// Indirizzo del venditore 
import { addressGianni } from "../../utils/utils";

const SingleArticleScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useFetch(`i=${id}`);
  const { data: allArticlesData } = useFetch(""); // Recupera tutti gli articoli
  const account = useAccount();
  const { sendTransaction } = useSendTransaction();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  // Selettori Redux
  const { isPurchasing, error, purchases } = useSelector((state: RootState) => state.purchase);
  const { currentArticles, currentIndex } = useSelector((state: RootState) => state.articleNavigation);

  // Effetto per salvare tutti gli articoli nello stato Redux
  useEffect(() => {
    if (allArticlesData.articles) {
      dispatch(setCurrentArticles(allArticlesData.articles));
    }
  }, [allArticlesData.articles, dispatch]);

  // Effetto per trovare l'indice dell'articolo corrente nell'array di tutti gli articoli
  useEffect(() => {
    if (currentArticles && id) {
      const index = currentArticles.findIndex(article => article.idArticle === id);
      dispatch(setCurrentIndex(index));
    }
  }, [currentArticles, id, dispatch]);

  // Funzione per navigare all'articolo precedente
  const goToPrevious = () => {
    if (!currentArticles || currentArticles.length === 0) return;
    
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = currentArticles.length - 1; // Vai all'ultimo elemento se sei al primo
    }
    
    const prevArticleId = currentArticles[newIndex].idArticle;
    navigate(`/article/${prevArticleId}`);
  };

  // Funzione per navigare all'articolo successivo
  const goToNext = () => {
    if (!currentArticles || currentArticles.length === 0) return;
    
    let newIndex = currentIndex + 1;
    if (newIndex >= currentArticles.length) {
      newIndex = 0; // Vai al primo elemento se sei all'ultimo
    }
    
    const nextArticleId = currentArticles[newIndex].idArticle;
    navigate(`/article/${nextArticleId}`);
  };

  // Verifica se l'articolo è già stato acquistato
  const checkIfPurchased = (articleId: string): boolean => {
    return purchases.some((purchase) => purchase.articleId === articleId);
  };

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
        <div className={styles.articleContent}>
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

  // Selezioniamo solo l'articolo con l'ID richiesto
  const article = data.articles.find((article) => article.idArticle === id);

  if (!article) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.articleContent}>
          <header>
            <Link to="/">
              <IoArrowBackCircleSharp className={styles.icon} />
            </Link>
            <h4 className={styles.backArrow}>Torna in Home</h4>
          </header>
          <ErrorMessage>Articolo Non Trovato</ErrorMessage>
        </div>
      </div>
    );
  }

  // Verifica se l'articolo è già stato acquistato
  const isAlreadyPurchased = checkIfPurchased(article.idArticle);
  
  // Funzione per gestire l'acquisto
  const handlePurchase = () => {
    if (!account.address) {
      return; // L'utente non è connesso
    }
    
    dispatch(setPurchasing(true));
    dispatch(clearError());
    
    sendTransaction(
      {
        to: addressGianni,
        value: parseEther(article.ethPrice.toString()),
      },
      {
        onSuccess: (txHash) => {
          // Crea un nuovo acquisto e aggiungilo al Redux store
          const newPurchase = {
            articleId: article.idArticle,
            articleName: article.strArticle,
            price: article.ethPrice.toString(),
            buyerAddress: account.address || "",
            txHash,
            chainId: account.chainId,
            timestamp: Date.now()
          };
          
          dispatch(addPurchase(newPurchase));
          
          // Reindirizza alla pagina di successo
          navigate(`/success/${article.idArticle}`);
        },
        onError: (error: any) => {
          dispatch(setError({
            errorName: error.name,
            errorMessage: error.message
          }));
          dispatch(setPurchasing(false));
        },
      }
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.articleContent}>
        <header>
          <Link to="/">
            <IoArrowBackCircleSharp className={styles.icon} />
          </Link>
          <h4 className={styles.backArrow}>Torna in Home</h4>
        </header>
        <hr />
        
        {/* Contenitore principale con frecce di navigazione */}
        <div className={styles.navigationContainer}>
          {/* Freccia sinistra (precedente) */}
          <div className={styles.navArrow} onClick={goToPrevious}>
            <IoChevronBackCircle className={styles.navIcon} />
          </div>
          
          <div className={styles.articleContainer}>
            <div className={styles.imageContainer}>
              <img 
                src={article.strArticleThumb} 
                alt={article.strArticle} 
                className={styles.img} 
              />
              
              {/* Mostra il lucchetto se l'utente non è connesso */}
              {account.status === "disconnected" && (
                <div className={styles.lockOverlay}>
                  <FaLock className={styles.lockIcon} />
                  <p className={styles.lockText}>Connetti il tuo wallet per acquistare questo articolo</p>
                </div>
              )}
            </div>
            
            <div className={styles.articleDetails}>
              <div className={styles.spacer}>
                <h2>{article.strArticle}</h2>
                <p className={styles.label}>Autore: {article.authArticle}</p>
                <p className={styles.label}>Prezzo: {article.ethPrice} ETH</p>
                {isAlreadyPurchased && (
                  <p className={styles.purchasedLabel}>Già acquistato</p>
                )}
              </div>
              <hr />
              <div className={styles.spacer}>
                <h4>Descrizione:</h4>
                <p className={styles.info}>{article.descArticle}</p>
              </div>
            </div>
          </div>
          
          {/* Freccia destra (successiva) */}
          <div className={styles.navArrow} onClick={goToNext}>
            <IoChevronForwardCircle className={styles.navIcon} />
          </div>
        </div>
        
        {error && (
          <div className={styles.errorContainer}>
            <strong>{error.errorName}</strong>
            <div>
              {error.errorName === "EstimateGasExecutionError" || 
               error.errorName === "TransactionExecutionError" ? (
                <div className={styles.errorContent}>
                  <em>
                    Spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta. 
                    L'errore potrebbe essere collegato al rifiuto della transazione o a un saldo insufficiente 
                    per acquistare l'articolo.
                  </em>
                  <button onClick={() => dispatch(clearError())}>Riprova</button>
                </div>
              ) : (
                <div className={styles.errorContent}>
                  <em>
                    Siamo spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta.
                    Riprova più tardi. Se il problema persiste, contatta l'assistenza tecnica.
                  </em>
                  <button onClick={() => dispatch(clearError())}>Riprova</button>
                </div>
              )}
            </div>
          </div>
        )}
        
        <button 
          className={styles.button}
          onClick={handlePurchase}
          disabled={
            account.status === "disconnected" || 
            isPurchasing || 
            isAlreadyPurchased
          }
        >
          {isPurchasing ? "Elaborazione in corso..." : 
           isAlreadyPurchased ? "Già acquistato" : "Acquista"}
        </button>
      </div>
    </div>
  );
};

export default SingleArticleScreen;