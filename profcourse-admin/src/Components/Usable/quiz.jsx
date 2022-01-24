/** @format */
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <Link className="link-thirtiery" to={`${props.modul_id}/quiz`}>
          Quiz
        </Link>
      </div>
    </div>
  );
}
