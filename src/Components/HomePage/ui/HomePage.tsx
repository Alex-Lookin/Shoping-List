import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Твой гид по магазинам</h1>
      <button onClick={() => navigate('/tasks')}>Перейти к списку задач</button>
    </div>
  );
};
