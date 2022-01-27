/** @format */

import LoginImage from "../assets/Group1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LupaPassword() {
  //message variables
  var newErrorMessage = "";

  //hooks
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isReset, setIsReset] = useState(false);

  //functions
  const onChange = (e) => {
    console.log(e);
    setEmail(e.target.value);
  };
  //axios fetching
  function resetPassword() {
    console.log("jalanin axios");
    axios
      .put("http://3.133.85.122:9090/api/v1/forgetpassword", {
        email: email,
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setIsReset(true);
      })
      .catch(function (error) {
        newErrorMessage = error.response.data.message;
        setErrorMessage(newErrorMessage);
        setIsLoading(false);
      });
  }

  const handleSubmit = (e) => {
    setIsLoading(true);
    setErrorMessage("");
    removeClass("email");
    resetPassword();
    e.preventDefault();
  };

  //helpers
  function addClass(name) {
    var element = document.getElementById(name);
    console.log(element);
    element.classList.add("is-invalid");
  }

  function removeClass(name) {
    var element = document.getElementById(name);
    element.classList.remove("is-invalid");
  }

  useEffect(() => {
    console.log("useEffect", errorMessage);
    if (errorMessage && !isLoading) {
      addClass("email");
    }
  });
  return (
    <div
      className=" bg-thirtiery m-0 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      <div className="container px-5">
        <div class="shadow-lg mx-lg-3" style={{ color: "#152C5B" }}>
          <div
            className="row rounded"
            style={{ backgroundColor: "white", minHeight: "75vh" }}>
            <div
              class="col-lg-6 rounded-start"
              style={{ backgroundColor: "#BACBEE" }}>
              <div className="col-md-12 text-center pt-3 d-flex justify-content-center h-100  align-items-center">
                <img src={LoginImage} alt="" width={300} />
              </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="px-5 py-lg-5 mx-lg-5 my-5 justify-content-center align-items-center">
                <div className="d-flex">
                  <div className="w-100 text-center">
                    <h3 className="mb-4 fw-bold">Lupa Password</h3>
                  </div>
                </div>
                {isLoading ? (
                  <div className="text-center">Loading...</div>
                ) : isReset ? (
                  <div className="text-center">
                    Password baru sudah dikirim ke email anda.
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="needs-validation"
                    novalidate>
                    <div className="form-group mb-3">
                      <label className="fw-normal" htmlFor="Email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Masukkan email anda"
                        value={email}
                        onChange={onChange}
                        required
                      />
                      <div
                        id="validationServerEmailFeedback"
                        class="invalid-feedback">
                        {errorMessage}
                      </div>
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-thirtiery w-100 shadow">
                        Reset Kata Sandi
                      </button>
                    </div>
                  </form>
                )}
                <div className="form-group">
                  <div className="w-100 text-right d-flex justify-content-center">
                    <Link to="/">
                      {" "}
                      <button
                        type="link"
                        href="/"
                        className="btn btn-link"
                        style={{ fontSize: "12px" }}>
                        Kembali ke halaman login.
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
