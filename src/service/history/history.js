import axios from "axios";
export const addTohistory = async (video, header) => {
  try {
    return await axios.post(
      "/api/user/history",
      { video },
      { headers: header }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getHistoryVideo = async (header) => {
  try {
    return await axios.get("/api/user/history", { headers: header });
  } catch (error) {
    console.log(error);
  }
};
export const deleteVideoFromHistory = async (videoId, header) => {
  try {
    return await axios.delete(`/api/user/history/${videoId}`, {
      headers: header,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllHistory = async (header) => {
  try {
    return await axios.delete("/api/user/history/all", {
      headers: header,
    });
  } catch (error) {
    console.log(error);
  }
};
