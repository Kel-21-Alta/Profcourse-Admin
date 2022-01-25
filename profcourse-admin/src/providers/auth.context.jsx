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
  setAuth: () => {},
};

const AuthContext = createContext(defaultAuthState);

const nonAuthPath = ["/", "/lupa-password"];

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(defaultAuthState);
  const location = useLocation();
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();

  const redirectToLogin = () => {
    navigate("/");
  };

  const logout = () => {
    setCookie("userData", JSON.stringify(undefined), {
      path: "/",
      sameSite: "lax",
    });
    setAuth({ ...defaultAuthState, isLoading: false });
    redirectToLogin();
  };

  // dijalanin sekali doang
  useEffect(() => {
    if (!cookie.userData) {
      setAuth({
        ...auth,
        isAuthenticated: false,
        isLoading: false,
      });
      return;
    }
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
        setCookie("userData", undefined, {
          path: "/",
          sameSite: "lax",
        });
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
    } else if (!userInProtectedRoute && !notAuthorized) {
      navigate("/dashboard");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ ...auth, logout, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
