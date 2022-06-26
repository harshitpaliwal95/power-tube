import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useExplore, useVideoGlobal } from "../../context";
import { searchItem } from "../../utils/search";
import { debounce } from "../../utils/debounce";

const Navbar = () => {
  const {
    auth: { isAuth },
    setAuth,
  } = useAuth();
  const { dispatch } = useVideoGlobal();
  const {
    exploreState: { explore },
  } = useExplore();

  const logOutHandler = () => {
    toast.success("Logout Succesfully");
    localStorage.removeItem("token");
    setAuth(() => ({
      token: "",
      isAuth: false,
    }));
  };

  const [dropDown, setDropDown] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchItemValue, setSearchItemValue] = useState([]);
  useEffect(() => {
    setDropDown(false);
  }, [pathname, isAuth]);

  const searchHandler = (e) => {
    let input = e.target.value;
    let arr = explore;
    const filterItem = searchItem(arr, input);
    setSearchItemValue(filterItem);
  };
  useEffect(() => {
    setSearchItemValue([]);
  }, [pathname]);

  return (
    <div>
      <header>
        <div className="user-ac"></div>
        <nav className="navbar">
          <div className="left-nav">
            <div className="logo">
              <Link to="/">
                <img className="nav-logo" src={logo} alt="logo img" />
              </Link>
            </div>
          </div>

          <div className="nav-center">
            <div className="search-navbar">
              {pathname === "/" ? (
                <button className="btn" onClick={() => navigate("/explore")}>
                  EXPLORE
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={searchHandler}
                  />
                  <button className="btn-icon">
                    <i className="bi bi-search"></i>
                  </button>

                  <div className="suggestion">
                    <div className="suggestion-box flex-column ">
                      {searchItemValue.map((item) => (
                        <span
                          className="opt-suggestion"
                          onClick={() => navigate(`/video/${item._id}`)}
                          key={item._id}
                        >
                          <i className="bi bi-search search-icon-sug"></i>
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="right-nav">
            <div>
              <button
                className="bi bi-person-fill btn-icon"
                onClick={() => setDropDown((pre) => (pre ? false : true))}
              ></button>
              <div className={`drop-box ${dropDown ? "show-box" : ""}`}>
                {isAuth ? (
                  <p onClick={() => logOutHandler()}>Logout</p>
                ) : (
                  <>
                    <Link to="/login">
                      <p>Login</p>
                    </Link>
                    <Link to="/signup">
                      <p>SignUp</p>
                    </Link>
                  </>
                )}
              </div>
              <button
                className="btn-icon burger"
                onClick={() => dispatch({ type: "SIDE_BAR" })}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export { Navbar };
