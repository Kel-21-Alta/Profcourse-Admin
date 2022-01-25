/** @format */
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config/env";
import LoadingNormal from "../../assets/loading";
import { useCookies } from "react-cookie";
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

  //Function to get summary data
  function getSumarry() {
    axios
      .get(`${BACKEND_URL}/api/v1/summary`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
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

      <div className="mt-4">
        <h6 className="fw-bold">Leaderboards</h6>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Nama</th>
                <th scope="col">Kelas Diambil</th>
                <th scope="col">Total Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>5</td>
                <td>50</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>6</td>
                <td>45</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>4</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-thirtiery align-item-end shadow">
              lebih banyak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
