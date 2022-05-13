import { useParams } from "react-router-dom";
import { Sidebar, Loader, Card } from "../../components";
export const SingleVideoPage = () => {
  const { id } = useParams();
  
  return (
    <main className="main-box">
      <Sidebar />
      <div className="main-product">
        <Loader />
      </div>
    </main>
  );
};
