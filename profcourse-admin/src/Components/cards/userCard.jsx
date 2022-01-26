/** @format */
import User from "../../assets/carbon_user-avatar-filled.png";
import DeleteButtonUser from "../buttons/deleteUser";
export default function UserCard(props) {
  return (
    <div
      class="card border-0 shadow-lg my-1"
      style={{ "border-radius": "30px" }}>
      <div class="card-body d-flex m-1 p-1">
        {props.data?.image_url ? (
          <img
            className="m-0 p-0"
            src={props?.data?.image_url}
            alt="user"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              "border-radius": "30px",
            }}></img>
        ) : (
          <img className="m-0 p-0" src={User} alt="user"></img>
        )}
        <div className="d-flex w-100">
          <div className="fw-bold my-2 mx-2 w-50">{props?.data?.name}</div>
          <div className="my-2 mx-2">
            Course diambil: <b>{props?.data?.taken_course}</b>
          </div>
          <div className="my-2 mx-2">
            Total point:<b>{props?.data?.point}</b>
          </div>
        </div>
        <div className="d-flex justify-content-end m-0 p-0">
          <DeleteButtonUser data={props?.data} del={props.del} />
        </div>
      </div>
    </div>
  );
}
