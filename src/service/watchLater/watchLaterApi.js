import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useVideoGlobal } from "../../context";

export const WatchLaterApi = () => {
  const {
    auth: { token, isAuth },
  } = useAuth();

  const { dispatch } = useVideoGlobal();
  const header = { authorization: token };
  const navigate = useNavigate();

  const watchLaterPost = async (video) => {
    if (isAuth) {
      try {
        const response = await axios.post(
          "/api/user/watchlater",
          { video: video },
          { headers: header }
        );

        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      } catch (error) {
        console.log(error);
        toast.error("Please login first!");
      }
    } else {
      toast.error("Please login first!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  const watchLaterDelete = async (video) => {
    try {
      const response = await axios.delete("/api/user/watchlater/" + video._id, {
        headers: header,
      });
      dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
    } catch (error) {
      console.log(error);
    }
  };
  return { watchLaterPost, watchLaterDelete };
};
