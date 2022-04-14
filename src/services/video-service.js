import axios from 'axios';
const encodedToken = localStorage.getItem('encodedToken');

const addToLikedVideos = async (video) => {
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

const deleteLikedVideo = async (id) => {
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

const getLikedVideos = async () => {
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

const getWatchLaterVideos = async () => {
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

const addToWatchLater = async (video) => {
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

const deleteWatchLaterVideo = async (id) => {
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

export {
  addToLikedVideos,
  deleteLikedVideo,
  getLikedVideos,
  addToWatchLater,
  getWatchLaterVideos,
  deleteWatchLaterVideo,
};
