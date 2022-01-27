/** @format */

import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/env";
import DeleteButton from "../buttons/delete";
import UpdateButton from "../buttons/update";

export default function KursusCard(props) {
  const { course_id, title, url_image } = props?.data;
  const linkDetailKursus = "/kursus/" + course_id;
  const [status, setStatus] = useState(props?.data?.status);
  const [course, setCourse] = useState(props?.data);
  const [cookie] = useCookies();

  function getAndSetData(course_id) {
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

  return (
    <div
      class="card shadow col p-0 h-25"
      style={{
        "border-radius": "15px",
        border: "none",
        maxWidth: "20rem",
        height: "30rem",
      }}>
      <img
        src={url_image}
        class="card-img-top p-0 m-0 w-100"
        alt={`${title}`}
        style={{ objectFit: "cover", "border-radius": "15px 15px 0px 0px" }}
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <div className="d-flex justify-content-center">
          <select
            className="form-select form-select-sm d-block my-3 w-50"
            aria-label=".form-select-sm example"
            style={{ "border-radius": "30px" }}
            value={status}>
            <option value={2}>Draft</option>
            <option value={1}>Publish</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={linkDetailKursus} class="btn btn-thirtiery align-self-end">
            Detail Kursus
          </Link>
          <UpdateButton data={course} edit={props?.edit} />

          <DeleteButton data={props?.data} del={props?.del} />
        </div>
      </div>
    </div>
  );
}
