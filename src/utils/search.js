export const searchItem = (arr, input) => {
  if (input !== null && input !== "") {
    const result = arr.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    if (result === []) return [];
    return result;
  } else {
    return [];
  }
};
