import React from "react";
import Article from "../../components/Article/Article";
import styles from "./Articles.module.css";

interface ArticleData {
  idArticle: string;
  strArticleThumb: string; 
  strArticle: string;
}

interface ArticlesProps {
  data: ArticleData[];
}

const Articles: React.FC<ArticlesProps> = ({ data }) => {
  console.log("Dati ricevuti in Articles.tsx:", data);

  return (
    <section className={styles.wrapper}>
      {data.map((el) => (
        <Article 
          key={el.idArticle} 
          idDrink={el.idArticle} 
          strDrinkThumb={el.strArticleThumb} 
          strDrink={el.strArticle} 
        />
      ))}
    </section>
  );
};

export default Articles;


