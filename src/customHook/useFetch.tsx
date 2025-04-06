import { useEffect, useState } from "react";
import { mockArticleData } from "../utils/articleMock";

// Definisci l'interfaccia per i dati dei cocktail
interface ArticleData {
  articles: any[] | null;
}

const useFetch = (queryParam: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ArticleData>({ articles: null });
  const [count, setCount] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        // Logica per filtrare i dati mock
        let filteredArticles = mockArticleData;

        if (queryParam.startsWith('s=')) {
          // Ricerca per nome
          const searchTerm = queryParam.replace('s=', '').toLowerCase();
          filteredArticles = mockArticleData.filter(article => 
            article.strArticle.toLowerCase().includes(searchTerm)
          );
        } else if (queryParam.startsWith('i=')) {
          // Ricerca per ID
          const id = queryParam.replace('i=', '');
          filteredArticles = mockArticleData.filter(article => 
            article.idArticle === id
          );
        } else if (queryParam.startsWith('f=')) {
          // Ricerca per lettera iniziale
          const letter = queryParam.replace('f=', '').toLowerCase();
          filteredArticles = mockArticleData.filter(article => 
            article.strArticle.toLowerCase().startsWith(letter)
          );
        }

        // Simulo risposta API
        const mockResponse = {
          data: { 
            articles: filteredArticles.length > 0 ? filteredArticles : null 
          }
        };

        setData(mockResponse.data);
        setCount(mockResponse.data.articles ? mockResponse.data.articles.length : 0);
      } catch (err) {
        setIsError(true);
        setCount(0);
        setData({ articles: null });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryParam]);

  return { isLoading, data, isError, count };
};

export default useFetch;






