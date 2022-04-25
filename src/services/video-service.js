import axios from 'axios';
const encodedToken = localStorage.getItem('encodedToken');

export const addToLikedVideos = async (video) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/user/likes',
      headers: { authorization: encodedToken },
      data: {
        video: video,
      },
    });
    return response && response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLikedVideo = async (id) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `/api/user/likes/${id}`,
      headers: { authorization: encodedToken },
    });
    return response && response.data.likes;
  } catch (error) {
    console.log(error);
  }
};

export const getLikedVideos = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `/api/user/likes`,
      headers: { authorization: encodedToken },
    });
    return response && response.data.likes;
  } catch (error) {
    console.log(error);
  }
};

export const getWatchLaterVideos = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `/api/user/watchlater`,
      headers: { authorization: encodedToken },
    });
    return response && response.data.watchlater;
  } catch (error) {
    return error;
  }
};

export const addToWatchLater = async (video) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/user/watchlater',
      headers: { authorization: encodedToken },
      data: {
        video: video,
      },
    });
    return response && response.data.watchlater;
  } catch (error) {
    return error;
  }
};

export const deleteWatchLaterVideo = async (id) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `api/user/watchlater/${id}`,
      headers: { authorization: encodedToken },
    });
    return response && response.data.watchlater;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPlaylists = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `/api/user/playlists`,
      headers: { authorization: encodedToken },
    });
    return response && response.data.playlists;
  } catch (error) {
    console.log(error);
  }
};

export const addToPlaylist = async (playlistDet) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/user/playlists',
      headers: { authorization: encodedToken },
      data: {
        playlist: playlistDet,
      },
    });
    return response && response.data.playlists;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylistVideo = async (id) => {
  try {
    const response = await axios({
      method: 'get',
      url: `/api/user/playlists/${id}`,
      headers: { authorization: encodedToken },
    });
    return response && response;
  } catch (error) {
    console.log(error);
  }
};

export const addVideoToPlaylist = async (id, video) => {
  try {
    const response = await axios({
      method: 'post',
      url: `/api/user/playlists/${id}`,
      headers: { authorization: encodedToken },
      data: {
        video: video,
      },
    });
    return response && response.data.playlist.videos;
  } catch (error) {
    console.log(error);
  }
};
