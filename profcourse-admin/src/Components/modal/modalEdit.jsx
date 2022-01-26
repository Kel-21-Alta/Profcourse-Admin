/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config/env";
import { useCookies } from "react-cookie";
export default function EditModal(props) {
  const [course, setCourse] = useState(props?.data);
  const [cookie] = useCookies();

  const onChange = (e) => {
    console.log(e);
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    props.edit(props.data.course_id, course);
    console.log("edit");
    e.preventDefault();
  };
  function getAndSetCourseData(course_id) {
    axios
      .get(`${BACKEND_URL}/api/v1/courses/${course_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        setCourse(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  useEffect(() => {}, [course]);
  useEffect(() => {
    getAndSetCourseData(props?.data?.course_id);
  }, []);

  return (
    <div>
      {/* Modal edit Course*/}
      <div
        className="modal fade"
        id={`editModal_${props.data.course_id}`}
        tabIndex={-1}
        aria-labelledby={`editModal_${props.data.course_id}`}
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Kursus
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
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img
                      src={course.url_image}
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
                      className="btn btn-thirtiery"
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <div className="form-group mb-3">
                      <div>
                        <label htmlFor="exampleFormControlSelect1">Judul</label>

                        <input
                          onChange={onChange}
                          name="name_course"
                          type="text"
                          class="form-control"
                          id="judul"
                          placeholder="Judul Kursus"
                          value={course.title}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="font-weight-normal" htmlFor="deskripsi">
                        Deskripsi
                      </label>

                      <textarea
                        onChange={onChange}
                        name="description"
                        class="form-control"
                        id="deskripsi"
                        rows="3"
                        placeholder="Deskripsi Kursus"
                        value={course.description}
                        required></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-thirtiery"
                  data-dismiss="modal"
                  onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
