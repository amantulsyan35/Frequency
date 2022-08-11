import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ url, handleProgress }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url={url}
        className='react-player'
        width='100%'
        controls={true}
        onProgress={({ playedSeconds }) => handleProgress(playedSeconds)}
      />
    </div>
  );
};

export default VideoPlayer;
