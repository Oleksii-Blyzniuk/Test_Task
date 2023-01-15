import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './HomePage.scss';
import { InfoList } from '../InfoList/InfoList';

export const HomePage = () => {
  const [infos, setInfo] = useState<any[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then(res => res.json())
      .then(
        (result) => {
          setInfo(result);
        },
      )
  }, []);

  const forSort = infos.filter(({ title, summary }) => {
    const lowValue = value.toLowerCase();

    return (
      title.toLowerCase().includes(lowValue)
      || summary.toLowerCase().includes(lowValue)
    );
  });

  return (
      <>
      <div className="field">
        <label htmlFor="biggy" className="filter">
          Filter by keywords
        </label>

        <div className="control">
          <SearchIcon sx={{
            marginLeft: "30px",
            color: "#575757",
            position: "absolute",
            zIndex: "1",
            width: "25px",
            height: "25px",
            top: "93px",
            left: "66px",
          }} />

          <input
            type="text"
            id="search-query"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="search"
            placeholder="Type search word" />
        </div>
      </div>
      
      <span className="results">Results: {forSort.length}</span>
      
      <div className="border"></div>
      
      <InfoList infos={forSort} />
      
    </>
  );
}