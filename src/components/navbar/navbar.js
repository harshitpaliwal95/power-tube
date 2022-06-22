import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useVideoGlobal } from "../../context";

const Navbar = () => {
  const {
    auth: { isAuth },
    setAuth,
  } = useAuth();
  const { dispatch } = useVideoGlobal();

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

  useEffect(() => {
    setDropDown(false);
  }, [pathname, isAuth]);
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
              {/* Feat on hold */}
              {/* <input type="text" placeholder="Search" />
              <button className="btn-icon">
                <i className="bi bi-search"></i>
              </button> */}
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
