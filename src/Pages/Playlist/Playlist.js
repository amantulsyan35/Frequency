import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllPlaylists, deletePlaylist } from '../../services/video-service';
import { ExploreCard } from '../../components';
import { usePlaylist } from '../../context/playlist-context';
import './Playlist.css';

const Playlist = () => {
  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response = await getAllPlaylists();
        playlistDispatch({
          type: 'SET_PLAYLIST',
          payload: response,
        });
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleNavigate = (id) => {
    navigate(`/user/playlist/${id}`);
  };

  const handleRemove = async (e, id) => {
    try {
      e.stopPropagation();
      const playlistArray = await deletePlaylist(id);
      toast.success('Playlist Removed');
      playlistDispatch({
        type: 'SET_PLAYLIST',
        payload: playlistArray,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className='playlist-container'>
      <section className='playlist-video-container'>
        {playlists.length === 0 ? (
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FEbGzxNByyIcve%2Fsource.gif&f=1&nofb=1'
            alt=''
          />
        ) : (
          playlists &&
          playlists.map((playlist) => {
            return (
              <ExploreCard
                key={playlist._id}
                videoTitle={playlist.title}
                videoThumbnail='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2011/06/YouTube.jpg'
                playlistDesc={playlist.description}
                onClick={() => handleNavigate(playlist._id)}
                type='playlist'
                handleRemove={(e) => handleRemove(e, playlist._id)}
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default Playlist;
