import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./auth.css";
import axios from "axios";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async () => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("/api/auth/login", body);
      response.data.encodedToken
        ? toast.success("login Succesfully")
        : toast.error("Wrong email or password try again!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <ToastContainer />
        <div className="form-container">
          <div className="form-info">
            <p className="heading-x-lg text-center">Login</p>
            <div className="form-input">
              <div className="input-box">
                <label className="text-medium">Email Address</label>
                <input
                  type="text"
                  placeholder="demo@yahoo.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label className="text-medium">Password</label>
                <input
                  type="text"
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                />
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
                <button
                  className="btn btn-outline"
                  onClick={() => logInHandler()}
                >
                  Log In
                </button>
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
