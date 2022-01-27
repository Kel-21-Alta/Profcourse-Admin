/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../buttons/delete";
import UpdateButton from "../buttons/update";

export default function KursusCard(props) {
  const { course_id, title, url_image } = props?.data;
  const linkDetailKursus = "/kursus/" + course_id;
  const [status, setStatus] = useState(props?.data?.status);
  setStatus(props?.data?.status);
  const onChange = (e) => {
    console.log(e.target.value);
    props.status(course_id, e.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {}, status);

  return (
    <div
      class="card shadow col p-0 h-25"
      style={{
        "border-radius": "15px",
        border: "none",
        maxWidth: "20rem",
        height: "30rem",
      }}
    >
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
            value={status}
            onChange={onChange}
          >
            <option value={2}>Draft</option>
            <option value={1}>Publish</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={linkDetailKursus} class="btn btn-thirtiery align-self-end">
            Detail Kursus
          </Link>
          <UpdateButton data={props?.data} edit={props?.edit} />
          <DeleteButton data={props?.data} del={props?.del} />
        </div>
      </div>
    </div>
  );
}
