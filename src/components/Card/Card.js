import { FaHistory, FaIndent } from 'react-icons/fa';

import './Card.css';

export const FeatureCard = ({
  videoThumbnail,
  videoTitle,
  creatorImage,
  creator,
  published,
  views,
}) => {
  return (
    <div className='Featured-card'>
      <div className='Featured-image'>
        <img src={videoThumbnail} alt={videoTitle} />
      </div>
      <div className='Featured-card-body'>
        <div className='Featured-card-avatar'>
          <img src={creatorImage} alt={creator} />
        </div>
        <div className='Featured-card-details'>
          <h4>{videoTitle}</h4>
          <p className='Featured-card-details-category'>{creator}</p>
          <span>
            <p>{views} views</p> <p>{published}</p>
          </span>
        </div>
        <div className='Featured-card-icon'>
          <FaHistory size={22} />
        </div>
      </div>
      <div className='Featured-card-footer'>
        <button>
          <FaHistory /> WATCH LATER
        </button>
        <button>
          <FaIndent /> ADD TO QUEUE
        </button>
      </div>
    </div>
  );
};
