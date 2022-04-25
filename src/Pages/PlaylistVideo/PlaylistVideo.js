import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPlaylistVideo } from '../../services/video-service';
import './PlaylistVideo.css';

const PlaylistVideo = () => {
  const [video, setVideo] = useState({});
  const params = useParams();
  useEffect(() => {
    try {
      (async () => {
        const response = await getPlaylistVideo(params.id);
        console.log(response);
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return (
    <main className='playlist-video'>
      <section className='playlist-video-list'></section>
    </main>
  );
};

export default PlaylistVideo;
