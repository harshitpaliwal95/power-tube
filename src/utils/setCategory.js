export const setCategory = (video, category) => {
  for (const name in category) {
    if (category[name]) {
      return video.filter((video) => video.category === name);
    }
  }
  return video;
};
