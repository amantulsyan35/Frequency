import { FaHistory, FaIndent } from 'react-icons/fa';

import './Card.css';

export const FeatureCard = () => {
  return (
    <div className='Featured-card'>
      <div className='Featured-image'>
        <img
          src='https://uploads-ssl.webflow.com/5dd81a71f9d4123047878254/5f172f91110104022a42cc27_maxresdefault69.jpg'
          alt=''
        />
      </div>
      <div className='Featured-card-body'>
        <div className='Featured-card-avatar'>
          <img
            src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='avatar'
          />
        </div>
        <div className='Featured-card-details'>
          <h4>Can Knowledge Drive You Crazy?</h4>
          <p className='Featured-card-details-category'>Pursuit of Wonder</p>
          <span>
            <p>280 views</p> <p>1 month ago</p>
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
