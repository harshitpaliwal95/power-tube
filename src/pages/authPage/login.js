import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./auth.css";
import axios from "axios";
export function Login() {
  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshBalika123");

  const navigate = useNavigate();

  const logInHandler = async () => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("/api/auth/login", body);
      if (response.data.encodedToken) {
        toast.success("login Succesfully");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        toast.error("Wrong email or password try again!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Unable To Login Try Again Later");
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
                <button
                  className="btn btn-outline guest-btn"
                  onClick={() => {
                    logInHandler();
                  }}
                >
                  Log In As Guest
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
