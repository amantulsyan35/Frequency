import './Modal.css';

const Modal = () => {
  return (
    <div className='playlist-modal-container '>
      <h3>Playlist</h3>
      <ul className='playlist-list'>
        <li>
          <input type='checkbox' />
          <label>Fiction</label>
        </li>
        <li>
          <input type='checkbox' />
          <label>Non Fiction</label>
        </li>
        <li>
          <input type='checkbox' />
          <label>Bestsellers</label>
        </li>
      </ul>

      <input type='text' className='playlist-input' />
      <button className='playlist-button'>Create Playist</button>
    </div>
  );
};

export default Modal;
