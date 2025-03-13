import { ReactNode } from 'react';
import { headerLogo, searchLogo } from '../../assets';
import { Input } from '../../Components/Common';
import './header.css';

type HeaderProps = {
  children?: ReactNode;
};
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="header-container">
      <img src={headerLogo} alt="Logo" />
      <div className="search-container">
        <img src={searchLogo} alt="Search Icon" />
        <Input type="text" />
      </div>
      <div className="header-children">{children}</div>
    </div>
  );
};

export default Header;
