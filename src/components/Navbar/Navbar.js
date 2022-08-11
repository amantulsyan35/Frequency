//External Dependencies
import { toast } from 'react-toastify';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import {
  FaSearch,
  FaVideo,
  FaBell,
  FaBars,
  FaNotEqual,
  FaSignOutAlt,
  FaUserPlus,
} from 'react-icons/fa';

import { useSideBar } from '../../context/sidebar-context';

import './Navbar.css';
import { Fragment } from 'react';

const NavSearch = () => {
  return (
    <div className='nav-search'>
      <FaSearch />
      <input type='search' placeholder='search' />
    </div>
  );
};

const NavList = ({ icon, to, onClick }) => {
  return (
    <li>
      {icon === 'notification' && (
        <NavLink to={to}>
          <FaBell className='nav-icon' />
        </NavLink>
      )}
      {icon === 'video' && (
        <Link to={to}>
          <FaVideo className='nav-icon' />
        </Link>
      )}
      {icon === 'signin' && (
        <Link to={to}>
          <FaUserPlus className='nav-icon' />
        </Link>
      )}
      {icon === 'signout' && (
        <FaSignOutAlt className='nav-icon' onClick={onClick} />
      )}
    </li>
  );
};

const Navbar = () => {
  const { sideBarState, sideBarDispatch } = useSideBar();

  let navigate = useNavigate();
  const encodedToken = localStorage.getItem('encodedToken');

  const handleLogout = () => {
    localStorage.clear();
    toast.success('🦄 Successfully Logged Out!');
    navigate('/user/signup');
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

      {/*<NavSearch />*/}
      <div className='nav-links-container'>
        <ul className='nav-links'>
          {/*<NavList icon='video' to='#' />*/}

          {encodedToken ? (
            <NavList icon='signout' onClick={handleLogout} />
          ) : (
            <NavList icon='signin' to='/signup' />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
