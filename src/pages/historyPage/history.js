import { toast } from "react-toastify";
import { Card, PagePlaceHolder, Sidebar } from "../../components";
import { useAuth } from "../../context";
import { useVideoGlobal } from "../../context/globalContext";
import { deleteAllHistory, HistoryApi } from "../../service/history/history";

export const History = () => {
  const {
    state: { history },
  } = useVideoGlobal();

  const { clearAllHistory } = HistoryApi();

  return (
    <div>
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <button className="btn" onClick={clearAllHistory}>
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
