import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaHistory } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ExploreCard } from '../../components';
import { useSideBar } from '../../context/sidebar-context';
import { useVideo } from '../../context/video-context';
import {
  getHistoryVideos,
  deleteVideoFromHistory,
  clearHistory,
} from '../../services/video-service';
import './History.css';

const History = () => {
  const {
    videoState: { historyArray },
    videoDispatch,
  } = useVideo();
  const { sideBarDispatch } = useSideBar();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const history = await getHistoryVideos();
        videoDispatch({
          type: 'SET_HISTORY_VIDEOS',
          payload: history,
        });
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
      const history = await deleteVideoFromHistory(id);
      videoDispatch({
        type: 'SET_HISTORY_VIDEOS',
        payload: history,
      });
      toast.success('Video Removed From History');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClear = async () => {
    try {
      const history = await clearHistory();
      videoDispatch({
        type: 'SET_HISTORY_VIDEOS',
        payload: history,
      });
      toast.success('history cleared');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='history-container'>
      <section className='history-video-container'>
        {historyArray.length !== 0 && (
          <FaHistory
            size={22}
            className='history-clear-icon'
            onClick={handleClear}
          />
        )}

        {historyArray.length === 0 ? (
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FEbGzxNByyIcve%2Fsource.gif&f=1&nofb=1'
            alt=''
          />
        ) : (
          historyArray &&
          historyArray.map((vid) => {
            return (
              <ExploreCard
                key={vid._id}
                videoThumbnail={vid.videoThumbnail}
                videoTitle={vid.videoTitle}
                creator={vid.videoCreator}
                onClick={() => handleNavigate(vid._id)}
                handleRemove={(e) => handleRemove(e, vid._id)}
                type='history'
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default History;
