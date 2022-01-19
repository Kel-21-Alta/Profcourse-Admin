/** @format */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config/env";

const defaultAuthState = {
  email: null,
  name: null,
  isAuthenticated: false,
  isLoading: true,
  logout: () => {},
};

const AuthContext = createContext(defaultAuthState);

const nonAuthPath = ["/", "/lupa-password"];

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(defaultAuthState);
  const location = useLocation();
  const navigate = useNavigate();
  const [cookie, removeCookies] = useCookies();

  const redirectToLogin = () => {
    navigate("/");
  };

  const logout = () => {
    removeCookies("userData");
    setAuth({ ...defaultAuthState, isLoading: false });
    redirectToLogin();
  };

  // dijalanin sekali doang
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/currentuser`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then((resp) => {
        const data = resp.data.data;
        setAuth({
          name: data.name,
          email: data.email,
          isAuthenticated: true,
          isLoading: false,
        });
      })
      .catch((err) => {
        setAuth({
          ...auth,
          isAuthenticated: false,
          isLoading: false,
        });
      });
  }, []);

  useEffect(() => {
    const notAuthorized = !auth.isLoading && !auth.isAuthenticated;
    const userInProtectedRoute = !nonAuthPath.includes(location.pathname);
    if (notAuthorized && userInProtectedRoute) {
      redirectToLogin();
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ ...auth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
