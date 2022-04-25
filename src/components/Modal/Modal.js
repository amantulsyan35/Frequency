import { useState } from 'react';
import {
  addToPlaylist,
  addVideoToPlaylist,
} from '../../services/video-service';
import { toast } from 'react-toastify';
import { usePlaylist } from '../../context/playlist-context';
import './Modal.css';

const Modal = ({ video }) => {
  const [playlistDetails, setPlaylistDetails] = useState({
    title: '',
    description: '',
  });
  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();

  const handleChange = (e) => {
    setPlaylistDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaylist = async () => {
    try {
      const playlists = await addToPlaylist(playlistDetails);
      console.log(playlists);
      playlistDispatch({
        type: 'SET_PLAYLIST',
        payload: playlists,
      });
      toast.success('New Playlist created');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCheckbox = async (e, id) => {
    try {
      await addVideoToPlaylist(id, video);
      toast.success('Video added to Playlist');
      playlistDispatch({ type: 'TOGGLE_PLAYLIST' });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className='playlist-modal'>
      <div className='playlist-modal-container '>
        <h3>Playlist</h3>
        <ul className='playlist-list'>
          {playlists.map((playlist) => {
            return (
              <li key={playlist._id}>
                <input
                  onChange={(e) => handleCheckbox(e, playlist._id)}
                  type='checkbox'
                  name={playlist.title}
                />
                <label>{playlist.title}</label>
              </li>
            );
          })}
        </ul>
        <label>TITLE</label>
        <input
          type='text'
          className='playlist-input'
          name='title'
          onChange={(e) => handleChange(e)}
        />
        <label>DSCRIPTION</label>
        <input
          type='text'
          className='playlist-input'
          name='description'
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePlaylist} className='playlist-button'>
          Create Playist
        </button>
      </div>
    </div>
  );
};

export default Modal;
