import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ExploreCard } from '../../components';
import { useSideBar } from '../../context/sidebar-context';
import { useVideo } from '../../context/video-context';
import {
  getWatchLaterVideos,
  deleteWatchLaterVideo,
} from '../../services/video-service';
import './WatchLater.css';

const WatchLater = () => {
  const {
    videoState: { watchLater },
    videoDispatch,
  } = useVideo();
  const { sideBarDispatch } = useSideBar();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response = await getWatchLaterVideos();
        videoDispatch({
          type: 'SET_WATCH_LATER_VIDEOS',
          payload: response,
        });
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleWatchLater = async (e, id) => {
    try {
      e.stopPropagation();
      const response = await deleteWatchLaterVideo(id);
      toast.success('Removed from Watch later');
      videoDispatch({
        type: 'SET_WATCH_LATER_VIDEOS',
        payload: response,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleNavigate = (id) => {
    navigate(`/video/${id}`);
    sideBarDispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  return (
    <main className='watch-container'>
      <section className='watch-video-container'>
        {watchLater.length === 0 ? (
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FEbGzxNByyIcve%2Fsource.gif&f=1&nofb=1'
            alt=''
          />
        ) : (
          watchLater &&
          watchLater.map((vid) => {
            return (
              <ExploreCard
                key={vid._id}
                videoThumbnail={vid.videoThumbnail}
                videoTitle={vid.videoTitle}
                creator={vid.videoCreator}
                onClick={() => handleNavigate(vid._id)}
                handleWatchLater={(e) => handleWatchLater(e, vid._id)}
                type='watchlater'
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default WatchLater;
