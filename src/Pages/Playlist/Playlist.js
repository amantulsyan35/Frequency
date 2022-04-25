import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllPlaylists } from '../../services/video-service';
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
        const playlistArray = await getAllPlaylists();
        playlistDispatch({
          type: 'SET_PLAYLIST',
          payload: playlistArray,
        });
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleNavigate = (id) => {
    navigate(`/user/playlist/${id}`);
  };

  return (
    <main className='playlist-container'>
      <section className='playlist-video-container'>
        {playlists.length === 0 ? (
          <img src='' alt='' />
        ) : (
          playlists &&
          playlists.map((playlist, i) => {
            return (
              <ExploreCard
                key={playlist._id}
                videoTitle={playlist.title}
                videoThumbnail={playlist.videos[0].videoThumbnail}
                onClick={() => handleNavigate(playlist._id)}
                type='playlist'
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default Playlist;
