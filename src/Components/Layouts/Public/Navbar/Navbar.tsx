import './navbar.scss';
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../../../Shared/Constants';
import Header from '../../../../Views/header/Header';

export function Navbar() {
  return (
    <div>
      {/*<header className="header d-flex" id="header">
      <Link to={ROUTES.HOMEPAGE}>Home page</Link>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </header> */}
      <Header>
        {/* <Link to={ROUTES.LOGIN}>Login</Link>
    <Link to={ROUTES.SIGNUP}>Signup</Link> */}
      </Header>
    </div>
  );
}

export default Navbar;
