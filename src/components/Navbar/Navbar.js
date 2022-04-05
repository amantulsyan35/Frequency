//External Dependencies
import { Link, useNavigate, NavLink } from 'react-router-dom';
import {
  FaSearch,
  FaVideo,
  FaBell,
  FaSignInAlt,
  FaBars,
  FaNotEqual,
} from 'react-icons/fa';

import { useSideBar } from '../../context/sidebar-context';

import './Navbar.css';
import '../../styles/base.css';

const NavSearch = () => {
  return (
    <div className='nav-search'>
      <FaSearch />
      <input type='search' placeholder='search' />
    </div>
  );
};

const NavList = ({ icon, to }) => {
  return (
    <li>
      {icon === 'notification' && (
        <NavLink to={to}>
          <FaBell className='nav-icon' />
        </NavLink>
      )}
      {icon === 'video' && (
        <NavLink to={to}>
          <FaVideo className='nav-icon' />
        </NavLink>
      )}
      {icon === 'signin' && (
        <NavLink to={to}>
          <FaSignInAlt className='nav-icon' />
        </NavLink>
      )}
    </li>
  );
};

const Navbar = () => {
  const { sideBarState, sideBarDispatch } = useSideBar();

  let navigate = useNavigate();
  const encodedToken = window.localStorage.getItem('encodedToken');

  const handleLogout = () => {
    try {
      window.localStorage.clear();
      navigate('/signup');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        {sideBarState.showSideBar ? (
          <FaNotEqual
            className='nav-icon  '
            onClick={() => sideBarDispatch({ type: 'TOGGLE_SIDEBAR' })}
            size={18}
          />
        ) : (
          <FaBars
            className='nav-icon '
            onClick={() => sideBarDispatch({ type: 'TOGGLE_SIDEBAR' })}
            size={18}
          />
        )}
        <Link to='/'>[ &#128214;, &#9961;]</Link>
      </div>

      <NavSearch />
      <div className='nav-links-container'>
        <ul className='nav-links'>
          <NavList icon='video' to='user/checkout' />

          <NavList icon='notification' to='user/wishlist' />
          {encodedToken ? (
            <button className='nav-logout' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavList icon='signin' to='user/wishlist' />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
