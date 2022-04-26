import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/authContext";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const {
    auth: { isAuth },
    setAuth,
  } = useAuth();

  const logOutHandler = () => {
    toast.success("Logout Succesfully");
    localStorage.removeItem("token");
    setAuth(() => ({
      token: "",
      isAuth: false,
    }));
  };
  return (
    <div>
      <header>
        <ToastContainer />
        <div className="user-ac">
          <div className="rightside">
            <button className="user-ac-btn sign-btn">
              <Link to="/login">
                <p>Log In</p>
              </Link>
            </button>
            <span>|</span>
            <button className="user-ac-btn join-btn">
              <Link to="/signup">
                <p>Sign Up</p>
              </Link>
            </button>
            <span>|</span>
            {isAuth && (
              <button
                className="user-ac-btn help-btn"
                onClick={() => logOutHandler()}
              >
                <p>Log Out</p>
              </button>
            )}
          </div>
        </div>
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
              <input type="text" placeholder="Search" />
              <button className="btn-icon">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="right-nav">
            <div>
              <button className="btn-icon burger">
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
