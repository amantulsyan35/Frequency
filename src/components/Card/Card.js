import { FaHistory, FaIndent } from 'react-icons/fa';

import './Card.css';

export const FeatureCard = ({
  videoThumbnail,
  videoTitle,
  creatorImage,
  creator,
  published,
  views,
  onClick,
}) => {
  return (
    <div className='Featured-card' onClick={onClick}>
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

export const ExploreCard = ({
  videoThumbnail,
  videoTitle,
  creator,
  views,
  published,
  desc,
  onClick,
}) => {
  return (
    <div className='Explore-card' onClick={onClick}>
      <div className='Explore-image'>
        <img src={videoThumbnail} alt={videoTitle} />
      </div>
      <div className='Explore-card-body'>
        <h2>{videoTitle}</h2>
        <div className='Explore-card-details'>
          <p>
            <b>{creator}</b>
          </p>
          <p>
            <b>{views} views</b>
          </p>
          <p>
            <b>{published}</b>
          </p>
        </div>
        <p className='Explore-card-desc'>{desc}</p>
      </div>
      <div className='Explore-card-icons'>
        <FaHistory size={22} />
      </div>
    </div>
  );
};

export const RecommendationCard = ({
  videoThumbnail,
  videoTitle,
  creatorImage,
  creator,
  published,
  views,
  onClick,
}) => {
  return (
    <div className='rec-card' onClick={onClick}>
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
    </div>
  );
};
