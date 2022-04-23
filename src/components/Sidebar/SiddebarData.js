import {
  FaHome,
  FaCompass,
  FaClock,
  FaIndent,
  FaHistory,
  FaThumbsUp,
} from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    icon: <FaHome />,
    link: '/',
    cName: 'Home-row',
  },
  {
    title: 'Explore',
    icon: <FaCompass />,
    link: '/explore',
    cName: 'Explore-row',
  },
  {
    title: 'Liked',
    icon: <FaThumbsUp />,
    link: '/user/like',
    cName: 'Liked-row',
  },
  {
    title: 'Playlists',
    icon: <FaIndent />,
    link: '/user/playlist',
    cName: 'Playlist-row',
  },
  {
    title: 'History',
    icon: <FaHistory />,
    link: '',
    cName: 'History-row',
  },
  {
    title: 'Watch Later',
    icon: <FaClock />,
    link: '/user/watchlater',
    cName: 'Later-row',
  },
];
