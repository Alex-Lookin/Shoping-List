import { ITitleHeaderProps } from '../types/types.ts'

const Header = ({ title } : ITitleHeaderProps ) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;