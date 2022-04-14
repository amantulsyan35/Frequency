import { createContext, useContext, useReducer } from 'react';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'SET_VIDEOS':
        return { ...state, videos: action.payload };
      case 'SET_CATEGORY_VIDEOS':
        return { ...state, categoryVideos: action.payload };
      case 'SET_LIKED_VIDEOS':
        return { ...state, likedVideos: action.payload };
      case 'SET_WATCH_LATER_VIDEOS':
        return { ...state, watchLater: action.payload };
      default:
        return state;
    }
  };

  const [videoState, videoDispatch] = useReducer(reducerFunc, {
    videos: [],
    categoryVideos: [],
    likedVideos: [],
    watchLater: [],
  });

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
