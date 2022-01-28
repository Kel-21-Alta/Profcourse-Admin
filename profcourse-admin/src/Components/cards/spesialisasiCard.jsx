/** @format */

import { Link } from "react-router-dom";

export default function SpesialisasiCard(props) {
  const { id, title, url_image } = props?.data;
  const linkDetailKursus = "/spesialisasi/" + id;

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
        </div>
      </div>
    </div>
  );
}
