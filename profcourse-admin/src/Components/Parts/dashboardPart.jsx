/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import LoadingNormal from "../../assets/loading";
import { BACKEND_URL } from "../../config/env";
export default function DashboardPart(props) {
  //State
  //Summary State
  const [summary, setSummary] = useState({
    count_course: 0,
    count_user: 0,
    count_spesialization: 0,
  });

  //isLoading (getting data) state
  const [isLoading, setIsLoading] = useState(true);

  //save cookies to state
  const [cookie] = useCookies();
  var jwt_token = "";
  if (cookie.userData !== undefined) {
    jwt_token = cookie.userData.token;
  }

  //Function to get summary data
  function getSumarry() {
    axios
      .get(`${BACKEND_URL}/api/v1/summary`, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
        },
      })
      .then(function (response) {
        setSummary(response.data.data);
        setIsLoading(false);
        console.log("summary", summary);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    getSumarry();
  }, []);

  return (
    <div className="mx-5 my-3">
      <h2 className="fw-bold">Dashboard</h2>
      {isLoading ? (
        <div className="text-center">
          {" "}
          <LoadingNormal />{" "}
        </div>
      ) : (
        <div className="container my-4">
          <div className="row mx-auto justify-content-center">
            <div
              class="card col-md-3 mx-4 shadow border-0   py-4 my-2"
              style={{ "border-radius": "15px" }}>
              <div class="card-body text-center">
                <h1 className="fw-bold ">{summary.count_course}</h1>
                <h3 className="">Kursus</h3>
              </div>
            </div>
            <div
              class="card col-md-3 mx-4 shadow border-0 py-4 my-2"
              style={{ "border-radius": "15px" }}>
              <div class="card-body text-center">
                <h1 className="fw-bold">{summary.count_user}</h1>
                <h3 className="">Pengguna</h3>
              </div>
            </div>
            <div
              class="card col-md-3 mx-4 shadow border-0 py-4 my-2"
              style={{ "border-radius": "15px" }}>
              <div class="card-body text-center">
                <h1 className="fw-bold">{summary.count_spesialization}</h1>
                <h3 className="">Spesialisasi</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
