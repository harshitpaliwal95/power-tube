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
              <div className="input-box">
                <label className="text-medium">Full name</label>
                <input type="text" placeholder="Monkey D luffy" />
              </div>
              <div className="input-box">
                <label className="text-medium">Email address</label>
                <input type="text" placeholder="demo@yahoo.com" />
              </div>
              <div className="input-box">
                <label className="text-medium">Password</label>
                <input type="text" placeholder="*******" />
              </div>
              <div className="space-between forget-pass">
                <span>
                  <label className="text-medium">
                    <input type="checkbox" /> I accept all term & condition
                  </label>
                </span>
              </div>
              <div className="form-btn">
                <button className="btn btn-outline">Join Us</button>
              </div>
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
