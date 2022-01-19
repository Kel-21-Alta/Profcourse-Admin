/** @format */

import { useCookies } from "react-cookie";
import User from "../../assets/user.png";
import { useAuth } from "../../providers/auth.context";
export default function AdminTab(props) {
  const auth = useAuth();

  return (
    <div className="d-flex justify-content-end px-5">
      <img src={User} alt="user" />
      <button onClick={auth.logout}>logout</button>
    </div>
  );
}
