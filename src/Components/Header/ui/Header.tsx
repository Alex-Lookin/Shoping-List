import { ITitleHeaderProps } from '../../../types/types.ts'
import './header.scss';

export const Header = ({ title } : ITitleHeaderProps ) => {
  return (
    <header className='header'>
      <h1 className='title-task'>{title}</h1>
    </header>
  );
};

