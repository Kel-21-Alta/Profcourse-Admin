/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailUserPart() {
  const [dataUser, setDataUser] = useState();
  const param = useParams();
  const navigate = useNavigate();

  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;
  function getAndSetUserData() {
    axios
      .get(`http://3.133.85.122:9090/api/v1/users/${param.user_id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        setDataUser(response.data.data);
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
        alert(response.data.data.message);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    getAndSetUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mx-5 my-3">
        <h2 className="fw-bold">
          Detail Pengguna <h6>{dataUser?.user_id}</h6>
        </h2>
        <div className="my-2  py-2">
          <div className="border me-5" style={{ "border-radius": "20px" }}>
            <div className="p-3 m-3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row my-3 mt-4 mx-1">
                    <div className="col-lg-8 px-1">
                      <div className="mb-3">
                        <div className="text-thirtiery">Nama</div>
                        <div className="text-primary fw-bold">
                          {dataUser?.name}
                        </div>
                      </div>
                      <div className="my-3">
                        <div className="text-thirtiery">Email</div>
                        <div className="text-primary fw-bold">
                          {dataUser?.email}
                        </div>
                      </div>
                      <div className="my-3">
                        <div className="text-thirtiery">
                          Tempat, Tanggal Lahir
                        </div>
                        <div className="text-primary fw-bold">
                          {dataUser?.birth_place}, {dataUser?.birth}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 px-1">
                      <div className="mb-3">
                        <div className="text-thirtiery">Bio</div>
                        <div className="text-primary fw-bold">
                          {dataUser?.bio}
                        </div>
                      </div>
                      <div className="my-3">
                        <div className="text-thirtiery">No. Handphone</div>
                        <div className="text-primary fw-bold">
                          {dataUser?.no_hp}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex justify-content-center">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      src={dataUser?.url_image}
                      className="w-50"
                      style={{ "border-radius": "300px" }}
                    ></img>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <button
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target={`#hapus_${dataUser?.user_id}`}
                    >
                      Hapus Pengguna
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id={`hapus_${dataUser?.user_id}`}
          tabIndex={-1}
          aria-labelledby={`hapus_${dataUser?.user_id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Hapus
                </h5>
                <button
                  type="button"
                  className="btn"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body text-start">
                Apakah anda yakin untuk menghapus pengguna{" "}
                <b>{dataUser?.name}</b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Tidak
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(dataUser?.user_id);
                    navigate(`/pengguna`);
                  }}
                  data-dismiss="modal"
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
