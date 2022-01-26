/** @format */

import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../config/env";
import Star from "../Usable/Star";
import { useState, useEffect } from "react";
import axios from "axios";
import ModulBox from "../Usable/modul";
import LoadingNormal from "../../assets/loading";
import { useParams } from "react-router-dom";

export default function DetailKursusEdit(props) {
  const param = useParams();
  //state
  const courseDefault = {
    info_user: {
      current_user: "",
      isRegister: false,
      progress: 0,
    },
    course_id: "",
    name_course: "",
    description: "",
    url_image: "",
    teacher: "",
    moduls: [],
    user_taken_course: 0,
    rangking: [],
  };
  const [course, setCourse] = useState(courseDefault);
  const [newModul, setNewModul] = useState({
    course_id: param.id,
    title: "",
    order: 0,
  });
  const [dataChange, setDataChange] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cookie] = useCookies();

  //functions
  //Get Course information
  function getAndSetCourseData(course_id) {
    axios
      .get(`${BACKEND_URL}/api/v1/courses/${course_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        setCourse(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  useEffect(() => {
    getAndSetCourseData(param.id);
    setDataChange(false);
  }, [dataChange]);

  //Create modul
  function createModul(course_id, title, order) {
    axios
      .post(
        `${BACKEND_URL}/api/v1/moduls`,
        {
          course_id,
          title,
          order,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.userData.token}`,
          },
        }
      )
      .then(function (response) {
        alert(response.data.data);
        console.log(response.data);
        setDataChange(true);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.message, 2));
        console.log(JSON.stringify(error, 2));
      });
  }
  //onChangeTitle
  const onChange = (e) => {
    console.log(e);
    setNewModul({
      ...newModul,
      [e.target.name]: e.target.value,
    });
  };
  //handleSubmitNewModul
  const handleSubmit = () => {
    setIsLoading(true);
    createModul(newModul.course_id, newModul.title, course.moduls.length + 1);
  };

  //Update modul
  function updateModul(modul_id, course_id, title, order) {
    axios
      .put(
        `${BACKEND_URL}/api/v1/moduls/${modul_id}`,
        {
          course_id: course_id,
          title: title,
          order: order,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.userData.token}`,
          },
        }
      )
      .then(function (response) {
        alert(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.message, 2));
        console.log(JSON.stringify(error, 2));
      });
  }
  //Delete modul
  function deleteModul(modul_id) {
    axios
      .delete(`${BACKEND_URL}/api/v1/moduls/${modul_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        alert(response.data.data);
        setDataChange(true);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <>
      <div className="row mx-4">
        <div className="col-md-6">
          <h1 className="fw-bold">Detail Kursus</h1>
          <div className="row">
            <div className="col-md-8">
              {isLoading ? (
                <p class="placeholder-wave">
                  <span class="placeholder col-6 btn btn-thirtiery disabled"></span>
                </p>
              ) : (
                <h3 className="text-thirtiery fw-bolder">
                  {course.name_course}
                </h3>
              )}
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                aria-label="Default select example">
                <option value={2}>Draft</option>
                <option value={1}>Publik</option>
              </select>
            </div>
          </div>
          {isLoading ? (
            <p class="placeholder-wave">
              <span class="placeholder col-6"></span>
            </p>
          ) : (
            <h6 className="mt-4 mb-0">Teacher: {course.teacher}</h6>
          )}
          {isLoading ? (
            <p class="placeholder-wave">
              <span class="placeholder col-12"></span>
            </p>
          ) : (
            <p className="mt-0">{course.description}</p>
          )}

          <button
            className="btn btn-thirtiery"
            data-toggle="modal"
            data-target="#buatmodul">
            Tambah Modul
          </button>
          {isLoading ? (
            <div className="text-center">
              <LoadingNormal></LoadingNormal>
            </div>
          ) : (
            <ModulBox
              setDataChange={setDataChange}
              data={course?.moduls}
              course={param.id}
              update={updateModul}
              delete={deleteModul}
            />
          )}
        </div>

        <div className="col-md-6 my-3 py-3 pe-3">
          {isLoading && (
            <p class="placeholder-wave text-center">
              <span
                class="placeholder col-6 btn btn-primary disabled"
                style={{ height: "15rem", width: "20rem" }}></span>
            </p>
          )}
          <div className="d-flex justify-content-center">
            <img
              src={course.url_image}
              alt=""
              srcset=""
              style={{ maxWidth: "25rem" }}
            />
          </div>
          <div className="my-3 mx-lg-5 px-lg-5">
            <div className="d-flex justify-content-end my-1">
              <Star value={4} width={35} height={35}></Star>
              <h5 className="my-2 fw-bold">4/5</h5>
            </div>
            <div className="d-flex gap-2 my-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 47 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 13.375C35.5275 13.375 38.3537 10.5275 38.3537 7C38.3537 3.4725 35.5275 0.625 32 0.625C28.4725 0.625 25.625 3.4725 25.625 7C25.625 10.5275 28.4725 13.375 32 13.375ZM15 13.375C18.5275 13.375 21.3538 10.5275 21.3538 7C21.3538 3.4725 18.5275 0.625 15 0.625C11.4725 0.625 8.625 3.4725 8.625 7C8.625 10.5275 11.4725 13.375 15 13.375ZM15 17.625C10.0487 17.625 0.125 20.1112 0.125 25.0625V30.375H29.875V25.0625C29.875 20.1112 19.9513 17.625 15 17.625ZM32 17.625C31.3838 17.625 30.6825 17.6675 29.9387 17.7313C32.4037 19.5163 34.125 21.9175 34.125 25.0625V30.375H46.875V25.0625C46.875 20.1112 36.9513 17.625 32 17.625Z"
                  fill="#3252DF"
                />
              </svg>
              {isLoading ? (
                <p class="placeholder-wave">
                  <span class="placeholder col-12"></span>
                </p>
              ) : (
                <h6 className="my-2">
                  {course.user_taken_course} orang mengikuti kursus ini
                </h6>
              )}
            </div>
            <div className="my-3">
              <h5 className="fw-bolder">Rank Nilai</h5>
              {isLoading && (
                <>
                  <li className="border-bottom mb-2 pb-2">
                    <p class="placeholder-wave">
                      <span class="placeholder col-12"></span>
                    </p>
                    <div className="text-end fw-bold">
                      <p class="placeholder-wave">
                        <span class="placeholder col-1"></span>
                      </p>
                    </div>
                  </li>
                  <li className="border-bottom mb-2 pb-2">
                    <p class="placeholder-wave">
                      <span class="placeholder col-12"></span>
                    </p>
                    <div className="text-end fw-bold">
                      <p class="placeholder-wave">
                        <span class="placeholder col-1"></span>
                      </p>
                    </div>
                  </li>
                  <li className="border-bottom mb-2 pb-2">
                    <p class="placeholder-wave">
                      <span class="placeholder col-12"></span>
                    </p>
                    <div className="text-end fw-bold">
                      <p class="placeholder-wave">
                        <span class="placeholder col-1"></span>
                      </p>
                    </div>
                  </li>
                </>
              )}
              <ol className="">
                {course?.rangking?.map((item) => (
                  <li className="border-bottom mb-2 pb-2">
                    {item.name_user}{" "}
                    <div className="text-end fw-bold">{item.skor} pts</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL MODAL */}
      <div>
        {/* Modal Buat Modul*/}
        <div
          className="modal fade"
          id="buatmodul"
          tabIndex={-1}
          aria-labelledby="buatmodul"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Buat Modul
                </h5>
                <button
                  type="button"
                  className="btn"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#" className="p-3">
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="topikKursus">
                      Judul Modul
                    </label>
                    <input
                      onChange={onChange}
                      name="title"
                      type="text"
                      className="form-control"
                      placeholder="Judul modul anda..."
                      required
                    />
                  </div>
                  {/* <div className="form-group text-right">
                          <Button className="btn" isPrimary hasShadow>
                            Ajukan Kursus
                          </Button>
                        </div> */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-thirtiery"
                  onClick={handleSubmit}
                  data-dismiss="modal">
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
