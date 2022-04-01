import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    user: {},
    isAuth: false,
  });
  useEffect(() => {
    setAuth({
      token: localStorage.getItem("token"),
      user: localStorage.getItem("user"),
      isAuth: localStorage.getItem("isAuth"),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
