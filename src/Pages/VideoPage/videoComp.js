import { FaThumbsUp, FaShare, FaIndent, FaCircle } from 'react-icons/fa';

export const VideoIcon = ({ title, iconName }) => {
  return (
    <>
      <p>
        <span>
          {iconName === 'like' && <FaThumbsUp />}
          {iconName === 'share' && <FaShare />}
          {iconName === 'save' && <FaIndent />}
        </span>{' '}
        {title}
      </p>
    </>
  );
};

export const VideoStats = ({ title, icon }) => {
  return (
    <>
      {title && (
        <p>
          {' '}
          <b>{title}</b>
        </p>
      )}
      {icon && (
        <p>
          {' '}
          <FaCircle size={6} />
        </p>
      )}
    </>
  );
};
