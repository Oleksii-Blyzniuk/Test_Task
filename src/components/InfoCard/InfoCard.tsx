import React from 'react';
import './InfoCard.scss';
import { Infos } from '../../types/Infos';
import { Link } from 'react-router-dom';

type InfoType = {
  info: Infos;
}

export const InfoCard: React.FC<InfoType> = ({ info }) => {
  // const randomData = new Date().toLocaleDateString();
  const date = info.publishedAt.slice(0, info.publishedAt.indexOf('T'));
  
  const description = info.summary.length <= 80 ? info.summary : info.summary.slice(0, 70) + '...';

  return (
    <div className="InfoCard">
      <img
        src={info.imageUrl}
        alt="info"
        className="InfoCard__image"
      />
      <div className="container">
        <span className="InfoCard__data">{date}</span>
        <span className="InfoCard__title">{info.title}</span>
        <span className="InfoCard__description">
          {description}
        </span>
        <Link to={`/article/${info.id}`} className="InfoCard__more">Read more</Link>
      </div>
    </div>
  )
}