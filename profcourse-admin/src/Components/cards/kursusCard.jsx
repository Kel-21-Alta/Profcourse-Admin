/** @format */

import { Link } from "react-router-dom";
import DeleteButton from "../buttons/delete";
import UpdateButton from "../buttons/update";

export default function KursusCard(props) {
  const { course_id, title, url_image } = props?.data;
  const linkDetailKursus = "/kursus/" + course_id;

  // eslint-disable-next-line react-hooks/exhaustive-deps

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
