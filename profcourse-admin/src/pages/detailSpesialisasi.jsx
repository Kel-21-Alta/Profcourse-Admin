/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import Star from "../Components/Usable/Star";

export default function DetailSpesialisasi() {
  const param = useParams();
  const [spesialisasi, setSpesialisasi] = useState({ spesialisasi: "a" });
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;
  function getAndSetSpesialisasiData() {
    setIsLoading(true);
    axios
      .get(`http://3.133.85.122:9090/api/v1/spesializations/${param?.id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        setSpesialisasi(response.data.data);
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

  useEffect(() => {
    getAndSetSpesialisasiData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar active={2} />
          <div class="col py-3">
            <AdminTab />
            <div className="mx-5 my-3">
              <h1 className="fw-bold">Detail Spesialisasi</h1>
              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-thirtiery fw-bolder">
                    {spesialisasi?.title}
                  </h3>
                  <p className="mt-3">{spesialisasi?.description}</p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center">
                    <img
                      src={spesialisasi.image_url}
                      style={{ width: "20rem", maxHeight: "30rem" }}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="d-flex justify-content-center gap-2 my-2">
                    <button className="shadow btn btn-thirtiery">Ubah</button>
                    <button
                      className="shadow btn btn-thirtiery"
                      data-toggle="modal"
                      data-target="#hapusspesialisasi">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
              <div className="me-5">
                {spesialisasi?.courses?.map((item) => (
                  <div
                    className="m-3"
                    style={{
                      backgroundColor: "#DEE2E6",
                      "border-radius": "15px",
                      border: "none",
                    }}>
                    <div className="p-3">
                      <div className="d-flex">
                        <h1 className="fw-bold ms-2">1</h1>
                        <div className="w-100 my-2 ms-5">
                          <div className="d-flex">
                            <h4 className="fw-bold w-100 mt-1">
                              {item?.title}
                            </h4>
                            <div className="d-flex w-100 justify-content-end">
                              <Star
                                value={item?.rating}
                                width={35}
                                height={35}></Star>
                              <h5 className="my-2 fw-bold">{item.rating}/5</h5>
                            </div>
                          </div>
                          <div className="my-2">
                            <p className="w-100">{item?.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL MODAL */}
      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="hapusspesialisasi"
          tabIndex={-1}
          aria-labelledby="hapusspesialisasi"
          aria-hidden="true">
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
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Apakah anda yakin untuk menghapus{" "}
                <b>Spesialisasi Data Science</b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Tidak
                </button>
                <button type="button" className="btn btn-danger">
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
