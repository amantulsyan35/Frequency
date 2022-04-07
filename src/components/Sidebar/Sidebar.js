import './Sidebar.css';
import '../../styles/base.css';
import { SidebarData } from './SiddebarData';

import { Link } from 'react-router-dom';

import { useSideBar } from '../../context/sidebar-context';

const Sidebar = () => {
  const { sideBarState } = useSideBar();

  return (
    <div className={sideBarState.showSideBar ? 'active-sidebar' : 'sidebar'}>
      <ul className='sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li className={`sidebar-row ${val.cName}`} key={key}>
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
