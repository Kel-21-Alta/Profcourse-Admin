/** @format */

import User from "../../assets/carbon_user-avatar-filled.png";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../cards/userCard";
import LoadingNormal from "../../assets/loading";

export default function PenggunaPart(props) {
  const [dataUser, setDataUser] = useState([]);
  const [limit, setLimit] = useState(12);
  const [sort, setSort] = useState("&sort=asc");
  const [sortBy, setSortBy] = useState("&sortby=name");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [dataChange, setDataChange] = useState(false);

  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;

  function getAndSetUserData() {
    axios
      .get(
        `http://3.133.85.122:9090/api/v1/users?limit=${limit}${search}${sort}${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        setDataUser(response.data.data);
        setIsLoading(false);
        console.log("[]dataUser", dataUser);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  function deleteUser(user_id) {
    axios
      .delete(`http://3.133.85.122:9090/api/v1/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        alert(response.data.data);
        console.log(response);
        setIsLoading(false);
        setDataChange(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  //SEARCH HANDLING
  const onChangeSearch = (e) => {
    console.log(e.target.value);
    const search = e.target.value;
    if (e.target.value === null || e.target.value === "") {
      setSearch();
    } else {
      setSearch(`&s=${search}`);
    }
    setIsLoading(true);
  };

  //SORT HANDLING

  const onChangeSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "1") {
      setSortBy("&sortby=name");
      setSort("&sort=asc");
    } else if (e.target.value === "2") {
      setSortBy("&sortby=name");
      setSort("&sort=desc");
    } else if (e.target.value === "3") {
      setSort("&sort=desc");
      setSortBy("&sortby=point");
    } else if (e.target.value === "4") {
      setSortBy("&sortby=point");
      setSort("&sort=asc");
    } else if (e.target.value === "5") {
      setSortBy("");
      setSort("&sort=desc");
    }
    setIsLoading(true);
  };

  useEffect(() => {
    getAndSetUserData();
  }, [dataChange, limit, search, sortBy, sort]);

  useEffect(() => {
    setDataChange(false);
  }, [dataUser, isLoading]);

  return (
    <div className="mx-5 my-3">
      <h2 className="fw-bold">Pengguna</h2>
      <div className="d-flex justify-content-end gap-2 me-5 my-2">
        <button className="btn btn-thirtiery shadow">
          Unduh Report Pengguna
        </button>
        <Link to="buat">
          <button className="btn btn-thirtiery shadow">Buat Pengguna</button>
        </Link>
      </div>
      <div className="d-flex my-2">
        <div className="py-2">
          <input
            type="text"
            className="form-control-sm px-3"
            id="searchPengguna"
            name="searchPengguna"
            placeholder="Cari Pengguna"
            onChange={onChangeSearch}
            style={{
              "border-radius": "30px",
              "background-color": "#E5E5E5",
              border: "none",
            }}
          />
        </div>
        <div class="d-flex justify-content-end w-100 py-2 px-5">
          <div className="mx-2">urutkan:</div>
          <div>
            <select
              className="form-select form-select-sm d-block"
              aria-label=".form-select-sm example"
              style={{ "border-radius": "30px" }}
              onChange={onChangeSort}>
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
              <option value="3">Poin Tertinggi</option>
              <option value="4">Poin Terendah</option>
              <option value="5">Terbaru</option>
            </select>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="text-center h-100">
          {" "}
          <LoadingNormal />
        </div>
      ) : (
        <div className="">
          {dataUser?.map((item) => (
            <UserCard key={item.id} data={item} del={deleteUser} />
          ))}
        </div>
      )}
    </div>
  );
}
