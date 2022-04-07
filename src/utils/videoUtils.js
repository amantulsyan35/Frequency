export const categoryVideos = (videoList, selectedCategory) => {
  return videoList.filter((vid) => vid.category === selectedCategory);
};
