/** @format */

import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import KursusLoadingCard from "../cards/kursusCardLoading";
import KursusTab from "../Usable/kursusTab";

export default function KursusPart(props) {
  const [progress, setProgress] = useState(0);
  //Variables and states

  const [dataKursus, setDataKursus] = useState([]);
  const [limit, setLimit] = useState(12);
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("&sort=title");
  const [sortBy, setSortBy] = useState("&sortby=asc");
  const [search, setSearch] = useState("");

  const [tabs, setTabs] = useState(1);
  const toggleTab = (index) => {
    setTabs(index);
    console.log(tabs);
  };
  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;

  //axios fetching
  function addCourse() {
    axios
      .post(
        "http://3.133.85.122:9090/api/v1/courses",
        {
          title: course.title,
          description: course.description,
          file_image: course.file_image,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        getAndSetCourseData();
        setIsCreated({ state: true, id: response.data.data.id });
      })
      .catch(function (error) {
        const newErrorMessage = error.response.data.message;
        setErrorMessage(newErrorMessage);
        console.log(errorMessage);
        alert(errorMessage.message);
        setIsLoading(false);
      });
  }

  function editCourse(course_id, editedCourse) {
    axios
      .put(
        `http://3.133.85.122:9090/api/v1/courses/${course_id}`,
        {
          title: editedCourse.name_course,
          description: editedCourse.description,
          file_image: editedCourse.url_image,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        getAndSetCourseData();
      })
      .catch(function (error) {
        const newErrorMessage = error.response.data.message;
        setErrorMessage(newErrorMessage);
        console.log(errorMessage);
        alert(errorMessage.message);
        setIsLoading(false);
      });
  }

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

  function deleteCourse(course_id) {
    axios
      .delete(`http://3.133.85.122:9090/api/v1/courses/${course_id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        getAndSetCourseData();
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  function editStatus(course_id, status) {
    axios
      .put(
        `http://3.133.85.122:9090/api/v1/status/courses/${course_id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        getAndSetCourseData();
      })
      .catch(function (error) {
        const newErrorMessage = error.response.data.message;
        setErrorMessage(newErrorMessage);
        console.log(errorMessage);
        alert(errorMessage.message);
        setIsLoading(false);
      });
  }

  //hooks
  var courseZero = {
    title: "",
    description: "",
    file_image:
      "https://www.incimages.com/uploaded_files/image/1024x576/software-computer-code-1940x900_35196.jpg",
  };
  const [course, setCourse] = useState(courseZero);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  var createdZero = {
    state: false,
    id: "",
  };
  const [isCreated, setIsCreated] = useState(createdZero);

  //functions

  const dismisal = () => {
    setCourse(courseZero);
    setIsCreated(createdZero);
  };

  const navigate = useNavigate();

  const onChange = (e) => {
    console.log(e);
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    addCourse();
    e.preventDefault();
  };

  const handleLebih = (e) => {
    setIsLoading(true);
    setLimit(limit + 12);
  };

  const goTo = (course_id) => {
    console.log(course_id);
    navigate(`${course_id}`);
  };

  //TABS HANDLING

  const clickPublishTab = () => {
    setStatus("&status=1");
    setLimit(12);
    setIsLoading(true);
  };

  const clickDrafTab = () => {
    setStatus("&status=2");
    setLimit(12);
    setIsLoading(true);
  };

  const clickKursusTab = () => {
    setStatus("");
    setLimit(12);
    setIsLoading(true);
  };

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
          setCourse({ ...course, file_image: url })
        );
      }
    );
  };

  const fileHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  useEffect(() => {
    getAndSetCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, status, search, isCreated, sort, sortBy]);

  useEffect(() => {
    console.log("isi", course);
  }, [course, isLoading]);

  return (
    <div className="mx-5 my-3">
      <h2 className="fw-bold">Kursus</h2>
      <div className="d-flex justify-content-end gap-2 me-5 my-2">
        <button
          className="btn btn-thirtiery shadow"
          data-toggle="modal"
          data-target="#exampleModalCreate1"
        >
          Buat Kursus
        </button>
        <Link to="buat_spesialisasi">
          <button className="btn btn-thirtiery shadow">
            Buat Spesialisasi
          </button>
        </Link>
      </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(1);
              clickKursusTab();
            }}
            class={tabs === 1 ? "nav-link active" : "nav-link"}
            id="kursus-tab"
            data-bs-toggle="tab"
            data-bs-target="#kursus"
            type="button"
            role="tab"
            aria-controls="kursus"
            aria-selected="true"
          >
            Kursus
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(2);
            }}
            class={tabs === 2 ? "nav-link active" : "nav-link"}
            id="spesialisasi-tab"
            data-bs-toggle="tab"
            data-bs-target="#spesialisasi"
            type="button"
            role="tab"
            aria-controls="spesialisasi"
            aria-selected="false"
          >
            Spesialisasi
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(3);
              clickPublishTab();
            }}
            class={tabs === 3 ? "nav-link active" : "nav-link"}
            id="publik-tab"
            data-bs-toggle="tab"
            data-bs-target="#publik"
            type="button"
            role="tab"
            aria-controls="publik"
            aria-selected="false"
          >
            Publik
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(4);
              clickDrafTab();
            }}
            class={tabs === 4 ? "nav-link active" : "nav-link"}
            id="draf-tab"
            data-bs-toggle="tab"
            data-bs-target="#draf"
            type="button"
            role="tab"
            aria-controls="draf"
            aria-selected="false"
          >
            Draf
          </button>
        </li>
      </ul>
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
            onChange={onChangeSearch}
          />
        </div>
        <div class="d-flex justify-content-end w-100 py-2 px-5">
          <div className="mx-2">urutkan:</div>
          <div>
            <select
              className="form-select form-select-sm d-block"
              aria-label=".form-select-sm example"
              style={{ "border-radius": "30px" }}
              onChange={onChangeSort}
            >
              <option value={1}>A-Z</option>
              <option value={2}>Z-A</option>
              <option value={3}>Terpopuler</option>
              <option value={4}>Terbaru</option>
              <option value={5}>Ulasan Tinggi</option>
            </select>
          </div>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class={tabs === 1 ? "tab-pane fade show active" : "tab-pane fade"}
          id="kursus"
          role="tabpanel"
          aria-labelledby="kursus-tab"
        >
          {isLoading ? (
            <KursusLoadingCard />
          ) : (
            <KursusTab
              data={dataKursus}
              del={deleteCourse}
              edit={editCourse}
              status={editStatus}
            />
          )}
        </div>
        <div
          class={tabs === 2 ? "tab-pane fade show active" : "tab-pane fade"}
          id="spesialisasi"
          role="tabpanel"
          aria-labelledby="spesialisasi-tab"
        >
          {isLoading ? (
            <KursusLoadingCard />
          ) : (
            <KursusTab
              data={dataKursus}
              del={deleteCourse}
              edit={editCourse}
              status={editStatus}
            />
          )}
        </div>
        <div
          class={tabs === 3 ? "tab-pane fade show active" : "tab-pane fade"}
          id="publik"
          role="tabpanel"
          aria-labelledby="publik-tab"
        >
          {isLoading ? (
            <KursusLoadingCard />
          ) : (
            <KursusTab
              data={dataKursus}
              del={deleteCourse}
              edit={editCourse}
              status={editStatus}
            />
          )}
        </div>
        <div
          class={tabs === 4 ? "tab-pane fade show active" : "tab-pane fade"}
          id="draf"
          role="tabpanel"
          aria-labelledby="draf-tab"
        >
          {isLoading ? (
            <KursusLoadingCard />
          ) : (
            <KursusTab
              data={dataKursus}
              del={deleteCourse}
              edit={editCourse}
              status={editStatus}
            />
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button onClick={handleLebih} className="btn btn-thirtiery shadow">
          Lihat lebih
        </button>
      </div>
      {/* MODAL BUAT COURSE */}
      <div>
        {/* Modal Buat Course*/}
        <div
          className="modal fade"
          id="exampleModalCreate1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="signin-form">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Buat Kursus
                  </h5>
                  <button
                    type="button"
                    className="btn"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => dismisal()}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <img
                        src={course.file_image}
                        className="card-img my-3"
                        alt="..."
                        height={180}
                        width={342}
                        style={{ objectFit: "cover" }}
                      />
                      {isCreated.state ? (
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="btn btn-thirtiery"
                          disabled
                        />
                      ) : (
                        <>
                          {" "}
                          <form onSubmit={fileHandler}>
                            <input
                              type="file"
                              name="file"
                              id="file"
                              className="btn btn-thirtiery"
                            />
                            <button type="submit" className="btn btn-thirtiery">
                              Upload
                            </button>
                            <div>Upload Progress {progress}%</div>
                          </form>
                        </>
                      )}
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <div>
                          <label htmlFor="exampleFormControlSelect1">
                            Judul
                          </label>
                          {isCreated.state ? (
                            <input
                              onChange={onChange}
                              name="title"
                              type="text"
                              class="form-control"
                              id="judul"
                              placeholder="Judul Kursus"
                              value={course.title}
                              disabled
                            />
                          ) : (
                            <input
                              onChange={onChange}
                              name="title"
                              type="text"
                              class="form-control"
                              id="judul"
                              placeholder="Judul Kursus"
                              value={course.title}
                              required
                            />
                          )}
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="deskripsi"
                        >
                          Deskripsi
                        </label>
                        {isCreated.state ? (
                          <textarea
                            onChange={onChange}
                            name="description"
                            class="form-control"
                            id="deskripsi"
                            rows="3"
                            placeholder="Deskripsi Kursus"
                            value={course.description}
                            disabled
                          ></textarea>
                        ) : (
                          <textarea
                            onChange={onChange}
                            name="description"
                            class="form-control"
                            id="deskripsi"
                            rows="3"
                            placeholder="Deskripsi Kursus"
                            value={course.description}
                            required
                          ></textarea>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex">
                  {!(errorMessage === "") ? (
                    <div>{errorMessage.message}</div>
                  ) : isCreated.state ? (
                    <div>
                      course <b>{course.title}</b> berhasil dibuat
                    </div>
                  ) : (
                    <></>
                  )}
                  {isLoading ? (
                    <button
                      type="submit"
                      className="btn btn-thirtiery"
                      disabled
                    >
                      <div>
                        Sedang diunggah...
                        <div
                          class="spinner-border spinner-border-sm text-white"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </button>
                  ) : isCreated.state ? (
                    <button
                      type="submit"
                      className="btn btn-thirtiery"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => goTo(isCreated?.id)}
                    >
                      Lanjut Mengisi Modul dan materi Kursus
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="btn btn-thirtiery"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MODAL BUAT COURSE */}
    </div>
  );
}
