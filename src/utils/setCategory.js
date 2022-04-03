export const setCategory = (video, category) => {
  let newCategory = [];
  for (const name in category) {
    // console.log(name);
    if (category[name]) {
      return video.filter((video) => video.category === name);
    }
  }
  return video;
};
