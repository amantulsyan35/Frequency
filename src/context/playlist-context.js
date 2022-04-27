import { createContext, useContext, useReducer } from 'react';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_PLAYLIST':
        return { ...state, togglePlaylist: !state.togglePlaylist };
      case 'SET_PLAYLIST':
        return { ...state, playlists: action.payload };
      case 'SET_INDIVIDUAL_PLAYLIST':
        return { ...state, individualPlaylist: action.payload };
      default:
        return state;
    }
  };

  const [playlistState, playlistDispatch] = useReducer(reducerFunc, {
    togglePlaylist: false,
    playlists: [],
    individualPlaylist: {},
  });

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
