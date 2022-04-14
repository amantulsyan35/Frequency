import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExploreCard } from '../../components';
import { getLikedVideos, deleteLikedVideo } from '../../services/video-service';
import { useVideo } from '../../context/video-context';
import { useSideBar } from '../../context/sidebar-context';
import { toast } from 'react-toastify';
import './Like.css';

const Like = () => {
  const {
    videoState: { likedVideos },
    videoDispatch,
  } = useVideo();
  const { sideBarDispatch } = useSideBar();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response = await getLikedVideos();
        videoDispatch({
          type: 'SET_LIKED_VIDEOS',
          payload: response,
        });
      })();
    } catch (error) {
      toast(error.message);
    }
  }, []);

  const handleLike = async (e, id) => {
    try {
      e.stopPropagation();
      const response = await deleteLikedVideo(id);
      toast.success('Removed from Liked videos');
      videoDispatch({
        type: 'SET_LIKED_VIDEOS',
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
    <main className='like-container'>
      <section className='like-video-container'>
        {likedVideos.length === 0 ? (
          <img src='' alt='' />
        ) : (
          likedVideos &&
          likedVideos.map((vid) => {
            return (
              <ExploreCard
                key={vid._id}
                videoThumbnail={vid.videoThumbnail}
                videoTitle={vid.videoTitle}
                creator={vid.videoCreator}
                handleLike={(e) => handleLike(e, vid._id)}
                onClick={() => handleNavigate(vid._id)}
                type='like'
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default Like;
