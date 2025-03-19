import { ReactNode } from 'react';

import { Input } from '../../Components/Common';
import { ICONS } from '../../assets';
import { DATA } from '..';
import './header.css';

type HeaderProps = {
  children?: ReactNode;
};
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className={DATA.HeaderContainer}>
      <img src={ICONS.headerLogo} alt={DATA.Logo} />
      <div className={DATA.SearchContainer}>
        <img src={ICONS.searchLogo} alt={DATA.Logo} />
        <Input type={DATA.TypeText as any} />
      </div>
      <div className={DATA.HeaderChildren}>{children}</div>
    </div>
  );
};

export default Header;
