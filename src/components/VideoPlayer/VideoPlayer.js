import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url={url}
        className='react-player'
        width='100%'
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;
