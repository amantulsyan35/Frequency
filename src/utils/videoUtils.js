export const categoryVideoFilter = (videoList, selectedCategory) => {
  return videoList.filter((vid) => vid.category === selectedCategory);
};
