import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useVideoGlobal } from "../../context";

export const LikeVideoApi = () => {
  const {
    auth: { token, isAuth },
  } = useAuth();
  const navigate = useNavigate();
  const { dispatch } = useVideoGlobal();
  const header = { authorization: token };

  const likeVideoPost = async (video) => {
    if (isAuth) {
      try {
        const res = await axios.post(
          "/api/user/likes",
          { video: video },
          { headers: header }
        );
        dispatch({ type: "LIKE_VIDEO", payload: res.data.likes });
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
  const likeVideoDelete = async (video) => {
    try {
      const res = await axios.delete("/api/user/likes/" + video._id, {
        headers: header,
      });
      dispatch({ type: "LIKE_VIDEO", payload: res.data.likes });
    } catch (error) {
      console.log(error);
    }
  };
  return { likeVideoPost, likeVideoDelete };
};
