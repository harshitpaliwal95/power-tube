import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./auth.css";
export function Login() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="form-container">
          <div className="form-info">
            <p className="heading-x-lg text-center">Login</p>
            <div className="form-input">
              <div className="input-box">
                <label className="text-medium">Email Address</label>
                <input type="text" placeholder="demo@yahoo.com" />
              </div>
              <div className="input-box">
                <label className="text-medium">Password</label>
                <input type="text" placeholder="*******" />
              </div>
              <div className="space-between forget-pass">
                <span>
                  <label className="text-medium">
                    <input type="checkbox" /> Remember Me
                  </label>
                </span>
                <span>
                  <span className="text-medium">Forgot your password?</span>
                </span>
              </div>
              <div className="form-btn">
                <button className="btn btn-outline">Log In</button>
              </div>
              <div className="new-ac">
                <Link to="/signup">
                  <p className="text-center">
                    Create new account
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
