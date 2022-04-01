import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./auth.css";
export function SignUp() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="form-container">
          <div className="form-info">
            <p className="heading-x-lg text-center">Join-us</p>
            <div className="form-input">
              <form>
                <div className="input-box">
                  <label className="text-medium">Full name</label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Monkey D luffy"
                  />
                </div>
                <div className="input-box">
                  <label className="text-medium">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="demo@yahoo.com"
                  />
                </div>
                <div className="input-box">
                  <label className="text-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*******"
                  />
                </div>
                <div className="space-between forget-pass">
                  <span>
                    <label className="text-medium">
                      <input type="checkbox" /> I accept all term & condition
                    </label>
                  </span>
                </div>
                <div className="form-btn">
                  <button type="submit" className="btn btn-outline">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="new-ac">
                <Link to="/login">
                  <p className="text-center">
                    Already have an account
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
