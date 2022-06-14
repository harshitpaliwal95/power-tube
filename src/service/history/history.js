import axios from "axios";
import { toast } from "react-toastify";
import { useAuth, useVideoGlobal } from "../../context";
import { findItem } from "../../utils/findItem";
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

export const HistoryApi = () => {
  const { state, dispatch } = useVideoGlobal();
  const {
    auth: { token },
  } = useAuth();

  const header = { authorization: token };

  const addToHistory = async (video) => {
    const inHistory = findItem(state.history, video._id);
    if (!inHistory) {
      try {
        const {
          data: { history },
        } = await axios.post(
          "/api/user/history",
          { video: video },
          { headers: header }
        );
        dispatch({ type: "HISTORY", payload: history });
      } catch (error) {
        toast.info("Something went wrong");
      }
    }
  };

  const clearAllHistory = async () => {
    try {
      const {
        data: { history },
      } = await axios.delete("/api/user/history/all", {
        headers: header,
      });
      dispatch({ type: "HISTORY", payload: history });
    } catch (error) {
      toast.info("something went wrong");
    }
  };

  return { clearAllHistory, addToHistory };
};
