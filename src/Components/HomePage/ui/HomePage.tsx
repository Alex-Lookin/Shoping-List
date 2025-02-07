import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homePageStyle.scss';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='home-page'>
      <h2 className='slogan'>Твой гид по магазинам</h2>
      <button className='next-btn' onClick={() => navigate('/tasks')}>Перейти к списку покупок</button>
    </div>
  );
};
