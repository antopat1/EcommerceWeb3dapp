import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import style from "./SearchForm.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loading/Loading";

import Articles from "../../components/Articles/Articles";

import { RootState, AppDispatch } from "../../states/store";
import {
  setQuery,
  setLoading,
  setError,
  setSearchResults,
} from "../../states/searchBarShownSlice";
import useFetch from "../../customHook/useFetch";

const SearchForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { query } = useSelector((state: RootState) => state.searchbar);
  const [input, setInput] = useState(query);

  const { isLoading, data, isError, count } = useFetch(`s=${query}`);

  // Update Redux store when fetch results change
  React.useEffect(() => {
    dispatch(setLoading(isLoading));
    dispatch(setError(isError));

    if (data && data.articles) {
      dispatch(setSearchResults(data.articles));
    }
  }, [isLoading, isError, data, dispatch]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setQuery(input));
  };

  return (
    <>
      <section className={style.searchBar}>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="article">
              <h4>Cerca la tua opera</h4>
            </label>
            <div className={style.inputSearch}>
              <input
                id="article"
                className={style.input}
                placeholder={query}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className={`btn icon-btn ${style.searchButton}`}
                type="submit"
              >
                <FaSearch className="icon" />
              </button>
            </div>
          </form>
        </div>
        <p className={style.result}>{count} risultati</p>
      </section>
      <section>
        {isLoading ? (
          <Loading />
        ) : !data?.articles || data.articles.length === 0 ? (
          <ErrorMessage>Nessun Articolo Trovato</ErrorMessage>
        ) : (
          <Articles data={data.articles} />
        )}
      </section>
    </>
  );
};

export default SearchForm;

