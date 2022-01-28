/** @format */

import User from "../../assets/user.png";
import { useAuth } from "../../providers/auth.context";
export default function AdminTab(props) {
  const auth = useAuth();

  return (
    <div className="d-flex justify-content-end pe-5 me-5">
      <div class="dropdown">
        <div
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false">
          <img src={User} alt="user" />
        </div>
        <ul
          class="dropdown-menu px-3 py-2"
          aria-labelledby="dropdownMenuButton">
          <div>Hello!</div>
          <div>{auth.name}</div>
          <li className="my-1">
            <button className="btn btn-danger w-100" onClick={auth.logout}>
              logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
