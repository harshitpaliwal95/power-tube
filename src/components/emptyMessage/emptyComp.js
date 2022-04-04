import empty from "../../assets/empty.jpg";

export const EmptyComp = () => {
  return (
    <div>
      <p className="text-lg text-center">Wohooo Nothing in here</p>
      <img className="empty-img" alt="img for empty list" src={empty}></img>
    </div>
  );
};
