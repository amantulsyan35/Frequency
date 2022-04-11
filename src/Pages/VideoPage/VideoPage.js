import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { VideoPlayer, RecommendationCard } from '../../components';
import { VideoIcon, VideoStats } from './videoComp';
import { useVideo } from '../../context/video-context';
import { categoryVideoFilter } from '../../utils/videoUtils';
import './VideoPage.css';

const VideoPage = () => {
  const navigate = useNavigate();
  const {
    videoState: { categoryVideos },
    videoDispatch,
  } = useVideo();
  const [video, setVideo] = useState({});
  const params = useParams();

  useEffect(() => {
    try {
      async function fetchVideo() {
        const response = await axios.get(`/api/video/${params.videoId}`);
        setVideo(response.data.video);

        const response2 = await axios.get('/api/videos');
        let filteredVideos = categoryVideoFilter(
          response2.data.videos,
          video.category
        );

        videoDispatch({
          type: 'SET_CATEGORY_VIDEOS',
          payload: filteredVideos,
        });
      }
      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  }, [video, categoryVideos]);

  const handleNavigate = (id) => {
    navigate(`/video/${id}`);
  };

  return (
    <main className='videopage-container'>
      <section className='video-container'>
        <VideoPlayer url={video.videoURL} />
        <div className='video-details-container'>
          <h2>{video.videoTitle}</h2>
          <div className='video-details'>
            <div className='video-stats'>
              <VideoStats title={video.videoViews} />
              <VideoStats icon={true} />
              <VideoStats title={video.videoPublished} />
            </div>
            <div className='video-icons'>
              <VideoIcon title='LIKE' iconName='like' />
              <VideoIcon title='SHARE' iconName='share' />
              <VideoIcon title='SAVE' iconName='save' />
            </div>
          </div>
        </div>
        <div className='video-creator-container'>
          <div className='video-creator-image'>
            <img src={video.videoCreatorImage} alt={video.videoTitle} />
          </div>
          <div className='video-creator-details'>
            <h4>{video.videoCreator}</h4>
            <p>310K subscribers </p>
          </div>
          <div className='video-creator-button'>
            <button>Discuss</button>
          </div>
        </div>
      </section>
      <section className='video-rec-container'>
        {categoryVideos.map((vid) => {
          return (
            <RecommendationCard
              key={vid._id}
              videoThumbnail={vid.videoThumbnail}
              videoTitle={vid.videoTitle}
              creatorImage={vid.videoCreatorImage}
              creator={vid.videoCreator}
              published={vid.videoPublished}
              views={vid.videoViews}
              onClick={() => handleNavigate(vid._id)}
            />
          );
        })}
      </section>
    </main>
  );
};

export default VideoPage;
