import { useState } from 'react';
import {
  FaHistory,
  FaIndent,
  FaEllipsisV,
  FaTrashAlt,
  FaGratipay,
} from 'react-icons/fa';
import './Card.css';

export const FeatureCard = ({
  videoThumbnail,
  videoTitle,
  creatorImage,
  creator,
  published,
  views,
  onClick,
  handleWatch,
  handlePlaylist,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown((state) => !state);
  };

  return (
    <div className='Featured-card' onClick={onClick}>
      <div className='Featured-image'>
        <img src={videoThumbnail} alt={videoTitle} />
      </div>
      <div className='Featured-card-body'>
        <div className='Featured-card-avatar'>
          <img
            src={
              creatorImage ??
              ' `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`'
            }
            alt={creator}
          />
        </div>
        <div className='Featured-card-details'>
          <h4>{videoTitle}</h4>
          <p className='Featured-card-details-category'>{creator}</p>
          <span>
            <p>{views} views</p> <p>{published}</p>
          </span>
        </div>
        <div className='Featured-card-icon'>
          <FaEllipsisV onClick={(e) => handleDropdown(e)} size={22} />
          <ul
            className={showDropdown ? 'feature-dropdown' : 'feature-not-active'}
          >
            <li onClick={(e) => handlePlaylist(e)}>
              {' '}
              <FaIndent />
              Save to Playlist
            </li>
          </ul>
        </div>
      </div>
      <div className='Featured-card-footer'>
        <button onClick={(e) => handleWatch(e)}>
          <FaHistory /> WATCH LATER
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
  handleLike,
  type,
  handleWatchLater,
  playlistDesc,
  handleRemove,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown((state) => !state);
  };

  return (
    <div className='Explore-card' onClick={onClick}>
      <div className='Explore-image'>
        <img src={videoThumbnail} alt={videoTitle} />
      </div>
      <div className='Explore-card-body'>
        <h2>{videoTitle}</h2>
        <div className='Explore-card-details'>
          {type === 'playlist' && <p>{playlistDesc}</p>}
          <p>
            <b>{creator}</b>
          </p>
          {views && (
            <p>
              <b>{views} views</b>
            </p>
          )}
          <p>
            <b>{published}</b>
          </p>
        </div>
        <p className='Explore-card-desc'>{desc}</p>
      </div>
      <div className='Explore-card-icons'>
        <FaEllipsisV onClick={(e) => handleDropdown(e)} size={22} />
        <ul
          className={showDropdown ? 'explore-dropdown' : 'explore-not-active'}
        >
          {type === 'explore' && (
            <li
              onClick={(e) =>
                alert(
                  'You have unlocked an easter egg, reach out to me and I will show you what I am working on'
                )
              }
            >
              <FaGratipay />
              Easter Egg
            </li>
          )}
          {type === 'playlist' && (
            <li onClick={(e) => handleRemove(e)}>
              <FaTrashAlt />
              Remove Playlist
            </li>
          )}
          {type === 'playlistVideo' && (
            <li onClick={(e) => handleRemove(e)}>
              <FaTrashAlt />
              Remove Video
            </li>
          )}
          {type === 'history' && (
            <li onClick={(e) => handleRemove(e)}>
              <FaTrashAlt />
              Remove Video
            </li>
          )}
          {type === 'watchlater' && (
            <li>
              {' '}
              <FaIndent />
              Save to Playlist
            </li>
          )}
          {
            <>
              {type === 'like' && (
                <li onClick={(e) => handleLike(e)}>
                  <FaTrashAlt />
                  Remove from Liked videos
                </li>
              )}
              {type === 'watchlater' && (
                <li onClick={(e) => handleWatchLater(e)}>
                  <FaTrashAlt />
                  Remove from Watch later
                </li>
              )}
            </>
          }
        </ul>
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
        {/*<div className='Featured-card-icon'>
          <FaHistory size={22} />
  </div>*/}
      </div>
    </div>
  );
};
