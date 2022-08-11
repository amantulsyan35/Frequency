import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import { SidebarData } from './SiddebarData';

import { Link } from 'react-router-dom';

import { useSideBar } from '../../context/sidebar-context';

const Sidebar = () => {
  const location = useLocation();

  const { sideBarState } = useSideBar();
  const [selectedPage, setSelectedPage] = useState(location.pathname);

  return (
    <div className={sideBarState.showSideBar ? 'active-sidebar' : 'sidebar'}>
      <ul className='sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li
              className={
                selectedPage === val.link
                  ? `sidebar-row selected-page ${val.cName}`
                  : `sidebar-row  ${val.cName}`
              }
              key={key}
              onClick={() => setSelectedPage(val.link)}
            >
              <Link to={val.link}>
                {val.icon}
                <span>{val.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
