/** @format */

import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../config/env";
import Star from "../Usable/Star";
import { useState, useEffect } from "react";
import axios from "axios";
import ModulBox from "../Usable/modul";

export default function DetailKursusEdit(props) {
  //state
  var courseDefault = {
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
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cookie] = useCookies();

  //functions
  function getAndSetCourseData(course_id) {
    axios
      .get(`${BACKEND_URL}/api/v1/courses/${course_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        setCourse(response.data.data);
        console.log("[]dataKursus", course);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  useEffect(() => {
    getAndSetCourseData("333ce029-f383-4229-b786-40d23fa6c587");
  }, []);

  return (
    <>
      <div className="row mx-4">
        <div className="col-md-6">
          <h1 className="fw-bold">Detail Kursus</h1>
          <div className="row">
            <div className="col-md-8">
              <h3 className="text-thirtiery fw-bolder">{course.name_course}</h3>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                aria-label="Default select example">
                <option selected>Draft</option>
                <option value="1">Publik</option>
              </select>
            </div>
          </div>
          <h6 className="mt-4 mb-0">Teacher: {course.teacher}</h6>
          <p className="mt-0">{course.description}</p>
          <button
            className="btn btn-thirtiery"
            data-toggle="modal"
            data-target="#buatmodul">
            Tambah Modul
          </button>
          <ModulBox data={course?.moduls} />
        </div>

        <div className="col-md-6 my-3 py-3 pe-3">
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
              <h6 className="my-2">13 orang mengikuti kursus ini</h6>
            </div>
            <div className="my-3">
              <h5 className="fw-bolder">Rank Nilai</h5>
              <ol className="">
                <li className="border-bottom mb-2 pb-2">
                  Agus <div className="text-end fw-bold">12 pts</div>
                </li>
                <li className="border-bottom mb-2 pb-2">
                  Adrian Stanislaus Trisetya Siregar{" "}
                  <div className="text-end fw-bold">12 pts</div>
                </li>
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
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id="updatemodul"
          tabIndex={-1}
          aria-labelledby="updatemodul"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Modul
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
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="hapus"
          tabIndex={-1}
          aria-labelledby="hapus"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Hapus
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
                Apakah anda yakin untuk menghapus <b>modul 1</b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Tidak
                </button>
                <button type="button" className="btn btn-danger">
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Buat Modul*/}
        <div
          className="modal fade"
          id="buatmateri"
          tabIndex={-1}
          aria-labelledby="buatmateri"
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
                    <label className="font-weight-normal" htmlFor="tipemateri">
                      Tipe Materi
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>video</option>
                      <option value="1">materi</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul materi anda..."
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Unggah Materi
                    </label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-primary"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id="updatemateri"
          tabIndex={-1}
          aria-labelledby="updatemateri"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ubah Materi
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
                    <label className="font-weight-normal" htmlFor="tipemateri">
                      Tipe Materi
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>video</option>
                      <option value="1">materi</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul materi anda..."
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Unggah Materi
                    </label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="hapusmateri"
          tabIndex={-1}
          aria-labelledby="hapusmateri"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Hapus
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
                Apakah anda yakin untuk menghapus <b>materi 1</b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Tidak
                </button>
                <button type="button" className="btn btn-danger">
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MODAL */}
    </>
  );
}
