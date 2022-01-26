/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/Group1.png";
import { BACKEND_URL } from "../config/env";
import { useAuth } from "../providers/auth.context";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  //message variables
  var newErrorMessage = {
    email: "",
    password: "",
  };
  //cookies
  const [, setCookie] = useCookies(["user"]);
  //axios fetching
  function loginAdmin(email, password) {
    axios
      .post(`${BACKEND_URL}/api/v1/admin/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setCookie("userData", response.data.data, {
          path: "/",
          sameSite: "lax",
        });

        auth.setAuth({
          ...auth,
          name: response.data.data.name,
          email: response.data.data.email,
        });

        setIsLoading(false);
        goTo(`/dashboard`);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.message, 2));
        console.log(JSON.stringify(error, 2));
        if (error.response.data.code === 400) {
          newErrorMessage = {
            email: error.response.data.message,
          };
        } else if (error.response.data.code === 403) {
          newErrorMessage = {
            password: error.response.data.message,
          };
        }
        setErrorMessage(newErrorMessage);
        setIsLoading(false);
      });
  }
  //hooks
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //functions
  const onChange = (e) => {
    console.log(e);
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    removeClass("email");
    removeClass("password");
    const newLogin = login;
    loginAdmin(newLogin.email, newLogin.password);
    e.preventDefault();
  };

  function addClass(name) {
    var element = document.getElementById(name);
    console.log(element);
    element.classList.add("is-invalid");
  }

  function removeClass(name) {
    var element = document.getElementById(name);
    element.classList.remove("is-invalid");
  }

  const goTo = (location) => {
    navigate(location);
  };

  //effects
  useEffect(() => {
    console.log("useEffect", errorMessage);
    if (errorMessage.password && !isLoading) {
      addClass("password");
    } else if (errorMessage.email && !isLoading) {
      addClass("email");
    }
  });

  return (
    <div
      className=" bg-thirtiery m-0 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      <div className="container px-5">
        <div className="shadow-lg mx-lg-3" style={{ color: "#152C5B" }}>
          <div
            className="row rounded"
            style={{ backgroundColor: "white", minHeight: "75vh" }}>
            <div
              className="col-lg-6 rounded-start"
              style={{ backgroundColor: "#BACBEE" }}>
              <div className="col-md-12 text-center pt-3 d-flex justify-content-center h-100  align-items-center">
                <img src={LoginImage} alt="" width={300} />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="px-5 py-lg-5 mx-lg-5 my-5 justify-content-center align-items-center">
                <div className="d-flex">
                  <div className="w-100 text-center">
                    <h3 className="mb-4 fw-bold">Admin Login</h3>
                  </div>
                </div>
                {isLoading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="needs-validation"
                    noValidate>
                    <div className="form-group mb-3">
                      <label className="fw-normal" htmlFor="Email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Masukkan email anda"
                        value={login.email}
                        onChange={onChange}
                        required
                      />
                      <div
                        id="validationServerEmailFeedback"
                        className="invalid-feedback">
                        {errorMessage.email}
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="fw-normal" htmlFor="password">
                        Kata Sandi
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="masukkan password anda"
                        value={login.password}
                        onChange={onChange}
                        required
                      />
                      <div
                        id="validationServerPasswordFeedback"
                        className="invalid-feedback">
                        {errorMessage.password}
                      </div>
                    </div>
                    <div className="form-group">
                      <div
                        className="w-100 text-right d-flex justify-content-end"
                        style={{ fontSize: "10px" }}>
                        <Link to="lupa-password">
                          <button
                            type="button"
                            className="btn btn-link"
                            style={{ fontSize: "12px" }}>
                            Lupa password?
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="form-group text-center">
                      <button
                        className="btn btn-thirtiery w-100 shadow"
                        type="submit">
                        Masuk
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
