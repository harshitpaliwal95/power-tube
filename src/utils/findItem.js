export const findItem = (data, id) => {
  return data.find((item) => item._id === id);
};
