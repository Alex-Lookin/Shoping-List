import React from 'react';
import { Link } from 'react-router-dom';
import './notFoundPageStyle.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/">
        <button>Вернуться к списку</button>
      </Link>
    </div>
  );
};
