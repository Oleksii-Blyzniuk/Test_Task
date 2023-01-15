import React from 'react';
import './InfoList.scss';
import { InfoCard } from '../InfoCard/InfoCard';
import { Infos } from '../../types/Infos';

type InfoType = {
  infos: Infos[];
};

export const InfoList: React.FC<InfoType> = ({ infos = [] }) => (
  <div className="infos">
    { infos.map(info => (
      <InfoCard key={info.id} info={info} />))}
  </div>
);