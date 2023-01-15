import { Infos } from "../../types/Infos";
import { useState, useEffect } from 'react';
import { Article } from "../Article";

export const MoreInfoDetailsPage = () => {
  const [articles, setArticles] = useState<Infos[] | null>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then(res => res.json())
      .then(
        (result) => {
          setArticles(result);
        },
        (error) => {
          setError(true);
        }
      )
  }, [])

  return (
    <>
          {error && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {articles && (<Article articles={articles} />)}

    </>
  );
};
