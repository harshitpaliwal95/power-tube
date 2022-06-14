import { toast } from "react-toastify";
import { Card, PagePlaceHolder, Sidebar } from "../../components";
import { useAuth } from "../../context";
import { useVideoGlobal } from "../../context/globalContext";
import { deleteAllHistory } from "../../service/history/history";

export const History = () => {
  const {
    state: { history },
    dispatch,
  } = useVideoGlobal();
  const {
    auth: { token },
  } = useAuth();

  const header = { authorization: token };
  const clearAll = async () => {
    try {
      const {
        data: { history },
      } = await deleteAllHistory(header);
      dispatch({ type: "HISTORY", payload: history });
    } catch (error) {
      toast.info("something went wrong");
    }
  };

  return (
    <div>
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <button className="btn" onClick={clearAll}>
            Clear All History
          </button>
          {history.length === 0 && <PagePlaceHolder />}
          <div className="grid-three">
            {history.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};
