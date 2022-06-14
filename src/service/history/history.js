import axios from "axios";
export const addTohistory = (video, header) => {
  return axios.post("/api/user/history", { video: video }, { headers: header });
};

export const getHistoryVideo = (header) => {
  return axios.get("/api/user/history", { headers: header });
};
export const deleteVideoFromHistory = (videoId, header) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: header,
  });
};

export const deleteAllHistory = (header) => {
  return axios.delete("/api/user/history/all", {
    headers: header,
  });
};
