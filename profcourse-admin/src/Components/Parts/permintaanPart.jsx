/** @format */

// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
// import KursusTab from "../Usable/kursusTab";
import { useEffect } from "react";
// import KursusLoadingCard from "../cards/kursusCardLoading";
import LoadingNormal from "../../assets/loading";
import TableRequest from "../cards/tableRequest";

export default function PermintaanPart(props) {
  //Variables and states

  const [dataRequest, setDataRequest] = useState([]);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState("&sort=asc");
  const [search, setSearch] = useState("");

  const [tabs, setTabs] = useState(1);
  const toggleTab = (index) => {
    setTabs(index);
    console.log(tabs);
  };
  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;

  //axios fetching
  function getAndSetRequestData() {
    axios
      .get(
        `http://3.133.85.122:9090/api/v1/admin/requestusers?limit=${limit}${search}${sort}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        setDataRequest(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      })
      .then(function () {
        // always executed
      });
  }

  const [isLoading, setIsLoading] = useState(true);

  //LIMIT HANDLING
  const handleLebih = (e) => {
    setIsLoading(true);
    setLimit(limit + 5);
  };

  //SORT HANDLING

  const onChangeSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "1") {
      setSort("&sort=desc");
    } else if (e.target.value === "2") {
      setSort("&sort=asc");
    }
    setIsLoading(true);
  };

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

  useEffect(() => {
    getAndSetRequestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, search, sort]);

  useEffect(() => {}, [dataRequest, isLoading]);

  return (
    <div className="mx-5 my-3">
      <h2 className="fw-bold">Permintaan</h2>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(1);
            }}
            class={tabs === 1 ? "nav-link active" : "nav-link"}
            id="kursus-tab"
            data-bs-toggle="tab"
            data-bs-target="#kursus"
            type="button"
            role="tab"
            aria-controls="kursus"
            aria-selected="true"
          >
            Semua
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(2);
            }}
            class={tabs === 2 ? "nav-link active" : "nav-link"}
            id="spesialisasi-tab"
            data-bs-toggle="tab"
            data-bs-target="#spesialisasi"
            type="button"
            role="tab"
            aria-controls="spesialisasi"
            aria-selected="false"
          >
            Kursus Online
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(3);
            }}
            class={tabs === 3 ? "nav-link active" : "nav-link"}
            id="publik-tab"
            data-bs-toggle="tab"
            data-bs-target="#publik"
            type="button"
            role="tab"
            aria-controls="publik"
            aria-selected="false"
          >
            Training
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            onClick={() => {
              toggleTab(4);
            }}
            class={tabs === 4 ? "nav-link active" : "nav-link"}
            id="draf-tab"
            data-bs-toggle="tab"
            data-bs-target="#draf"
            type="button"
            role="tab"
            aria-controls="draf"
            aria-selected="false"
          >
            Konseling
          </button>
        </li>
      </ul>
      <div className="d-flex my-2">
        <div className="py-2">
          <input
            type="text"
            className="form-control-sm px-3"
            id="searchPengguna"
            name="searchPengguna"
            placeholder="Cari Permintaan"
            style={{
              "border-radius": "30px",
              "background-color": "#E5E5E5",
              border: "none",
            }}
            onChange={onChangeSearch}
          />
        </div>
        <div class="d-flex justify-content-end w-100 py-2 px-5">
          <div className="mx-2">urutkan:</div>
          <div>
            <select
              className="form-select form-select-sm d-block"
              aria-label=".form-select-sm example"
              style={{ "border-radius": "30px" }}
              onChange={onChangeSort}
            >
              <option value={1}>Terbaru</option>
              <option value={2}>Terlama</option>
            </select>
          </div>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class={tabs === 1 ? "tab-pane fade show active" : "tab-pane fade"}
          id="semua"
          role="tabpanel"
          aria-labelledby="semua"
        >
          {isLoading ? (
            <div className="justify-content-center d-flex my-2">
              <LoadingNormal />
            </div>
          ) : (
            <TableRequest data={dataRequest} tab={"semua"} />
          )}
        </div>
        <div
          class={tabs === 2 ? "tab-pane fade show active" : "tab-pane fade"}
          id="training"
          role="tabpanel"
          aria-labelledby="spesialisasi-tab"
        >
          {isLoading ? (
            <LoadingNormal />
          ) : (
            <TableRequest data={dataRequest} tab={"Online Course"} />
          )}
        </div>
        <div
          class={tabs === 3 ? "tab-pane fade show active" : "tab-pane fade"}
          id="publik"
          role="tabpanel"
          aria-labelledby="publik-tab"
        >
          {isLoading ? (
            <LoadingNormal />
          ) : (
            <TableRequest data={dataRequest} tab={"Training"} />
          )}
        </div>
        <div
          class={tabs === 4 ? "tab-pane fade show active" : "tab-pane fade"}
          id="draf"
          role="tabpanel"
          aria-labelledby="draf-tab"
        >
          {isLoading ? (
            <LoadingNormal />
          ) : (
            <TableRequest data={dataRequest} tab={"Counselling"} />
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-thirtiery shadow" onClick={handleLebih}>
          Lihat lebih
        </button>
      </div>
    </div>
  );
}
