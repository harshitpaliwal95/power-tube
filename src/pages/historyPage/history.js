import { Card, Sidebar } from "../../components";
import { useVideoGlobal } from "../../context/globalContext";
import { HistoryApi } from "../../service/history/history";

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
          {!history && (
            <button className="btn" onClick={clearAllHistory}>
              Clear All History
            </button>
          )}
          {history.length === 0 && (
            <>
              <p className="main-heading">No history</p>
              <i className="bi bi-x-lg empty-icon"></i>
            </>
          )}
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
