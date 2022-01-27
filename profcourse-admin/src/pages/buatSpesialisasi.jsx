/** @format */

import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import { storage } from "../firebase";

export default function BuatSpesialisasi() {
  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;
  const [progress, setProgress] = useState(0);
  //Variables and states
  const [isLoding, setIsLoading] = useState(true);
  const [spesialisasi, setSpesialisasi] = useState({ spesialisasi: "test" });
  const [dataKursus, setDataKursus] = useState([]);
  const [limit, setLimit] = useState(3);
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("&sort=title");
  const [sortBy, setSortBy] = useState("&sortby=asc");
  const [search, setSearch] = useState("");
  function getAndSetCourseData() {
    setIsLoading(true);
    axios
      .get(
        `http://3.133.85.122:9090/api/v1/courses?limit=${limit}${status}${search}${sort}${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        setDataKursus(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      })
      .then(function () {
        // always executed
      });
  }

  //SORT HANDLING

  const onChangeSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "1") {
      setSortBy("&sortby=asc");
      setSort("&sort=title");
    } else if (e.target.value === "2") {
      setSortBy("&sortby=desc");
      setSort("&sort=title");
    } else if (e.target.value === "3") {
      setSort("&sort=asc");
      setSortBy("&sortby=populer");
    } else if (e.target.value === "4") {
      setSortBy("&sortby=desc");
      setSort("");
    } else if (e.target.value === "5") {
      setSortBy("");
      setSort("&sort=review");
    }
    setIsLoading(true);
  };

  //SEARCH HANDLING
  const onChangeSearch = (e) => {
    console.log(e.target.value);
    const search = e.target.value;
    if (e.target.value === null || e.target.value === "") {
      setSearch();
    } else {
      setSearch(`&s=${search}`);
    }
    setIsLoading(true);
  };

  const onChange = (e) => {
    console.log(e);
    setSpesialisasi({
      ...spesialisasi,
      [e.target.name]: e.target.value,
    });
  };

  //upload file firebase
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setSpesialisasi({ ...spesialisasi, file_image: url })
        );
      }
    );
  };

  const fileHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    // addSpesialisasi();
    e.preventDefault();
  };
  return (
    <>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar active={2} />
          <div class="col py-3">
            <AdminTab />
            <div className="mx-5 my-3">
              <h1 className="fw-bold">Buat Spesialisasi</h1>
            </div>
            <div className="mx-5 pe-4">
              <h5>Info Spesialisasi</h5>
              <div className="border my-3" style={{ "border-radius": "15px" }}>
                <div className="row m-3 p-3">
                  <div className="col-md-6 text-center">
                    <img
                      src="https://picsum.photos/200/300"
                      className="card-img my-3"
                      alt="..."
                      height={180}
                      width={342}
                      style={{ objectFit: "cover" }}
                    />
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="btn btn-thirtiery form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <form action="#" className="signin-form">
                      <div className="form-group mb-3">
                        <div>
                          <label htmlFor="exampleFormControlSelect1">
                            Judul
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="judul"
                            placeholder="Judul Spesialisasi"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="deskripsi">
                          Deskripsi
                        </label>
                        <textarea
                          class="form-control"
                          id="deskripsi"
                          rows="3"
                          placeholder="Deskripsi Spesialisasi"
                          required></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-5 mt-4 pe-4">
              <h5>Pilih Kursus</h5>
              <div className="my-1">
                <div className="d-flex my-2">
                  <div className="py-2">
                    <input
                      type="text"
                      className="form-control-sm px-3"
                      id="searchPengguna"
                      name="searchPengguna"
                      placeholder="Cari Kursus"
                      style={{
                        "border-radius": "30px",
                        "background-color": "#E5E5E5",
                        border: "none",
                      }}
                    />
                  </div>
                  <div class="d-flex justify-content-end w-100 py-2 px-5">
                    <div className="mx-2">urutkan:</div>
                    <div>
                      <select
                        className="form-select form-select-sm d-block"
                        aria-label=".form-select-sm example"
                        style={{ "border-radius": "30px" }}>
                        <option selected>A-Z</option>
                        <option value="1">Z-A</option>
                        <option value="2">Terpopuler</option>
                        <option value="3">Terbaru</option>
                        <option value="3">Ulasan Tinggi</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Select</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Pengajar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel"
                              value=""
                              aria-label="..."
                            />
                          </div>
                        </th>
                        <td>Dasar Pemrograman</td>
                        <td>Roy</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel"
                              value=""
                              aria-label="..."
                            />
                          </div>
                        </th>
                        <td>Dasar Basis Data</td>
                        <td>Greg Iwan</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel"
                              value=""
                              aria-label="..."
                            />
                          </div>
                        </th>
                        <td>Basic Scripting</td>
                        <td>Kinan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-thirtiery align-item-end shadow">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
