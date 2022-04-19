import axios from "axios";
import { useAuth, useVideoGlobal } from "../../context";

export const WatchLaterApi = () => {
  const {
    auth: { token },
  } = useAuth();

  const { setWatchLater } = useVideoGlobal();
  const header = { authorization: token };

  const watchLaterPost = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video: video },
        { headers: header }
      );
      setWatchLater(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };
  const watchLaterDelete = async (video) => {
    try {
      const response = await axios.delete("/api/user/watchlater/" + video._id, {
        headers: header,
      });

      setWatchLater(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };
  return { watchLaterPost, watchLaterDelete };
};
