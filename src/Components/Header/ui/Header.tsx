import { ITitleHeaderProps } from '../../../types/types.ts'

export const Header = ({ title } : ITitleHeaderProps ) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  );
};

