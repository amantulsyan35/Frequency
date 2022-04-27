import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ExploreCard } from '../../components';
import { useSideBar } from '../../context/sidebar-context';
import {
  deleteVideoFromPlaylist,
  getPlaylist,
} from '../../services/video-service';
import './PlaylistVideo.css';

const PlaylistVideo = () => {
  const params = useParams();
  const [playlist, setPlaylist] = useState({});
  const navigate = useNavigate();
  const { sideBarDispatch } = useSideBar();

  useEffect(() => {
    try {
      (async () => {
        const playlist = await getPlaylist(params.id);
        setPlaylist(playlist);
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleNavigate = (id) => {
    navigate(`/video/${id}`);
    sideBarDispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  const handleRemove = async (e, id) => {
    try {
      e.stopPropagation();
      const playlist = await deleteVideoFromPlaylist(params.id, id);
      toast.success('Video Removed');
      setPlaylist(playlist);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className='playlist-video'>
      <section className='playlist-video-list'>
        {playlist.videos && playlist.videos.length === 0 ? (
          <img src='' alt='' />
        ) : (
          playlist.videos &&
          playlist.videos.map((vid) => {
            return (
              <ExploreCard
                key={vid._id}
                videoTitle={vid.videoTitle}
                creator={vid.videoCreator}
                videoThumbnail={vid.videoThumbnail}
                onClick={() => handleNavigate(vid._id)}
                handleRemove={(e) => handleRemove(e, vid._id)}
                type='playlistVideo'
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default PlaylistVideo;
