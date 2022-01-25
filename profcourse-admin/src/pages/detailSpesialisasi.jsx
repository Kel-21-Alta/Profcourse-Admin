/** @format */

import React from "react";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import Star from "../Components/Usable/Star";

export default function DetailSpesialisasi() {
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
                    Spesialisasi Data Science
                  </h3>
                  <p className="mt-3">
                    Ilmu data (bahasa Inggris: data science) adalah suatu
                    disiplin ilmu yang khusus mempelajari data, khususnya data
                    kuantitatif (data numerik), baik yang terstruktur maupun
                    tidak terstruktur.[1][2] Berbagai subjek yang dibahas dalam
                    ilmu data meliputi semua proses data, mulai dari pengumpulan
                    data, analisis data, pengolahan data, manajemen data,
                    kearsipan, pengelompokan data, penyajian data, distribusi
                    data, hingga cara mengubah data menjadi kesatuan informasi
                    yang dapat dipahami semua orang.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center">
                    <img src="https://picsum.photos/200/300" alt="" srcset="" />
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
                          <h4 className="fw-bold w-100 mt-1">Python Dasar</h4>
                          <div className="d-flex w-100 justify-content-end">
                            <Star value={4} width={35} height={35}></Star>
                            <h5 className="my-2 fw-bold">4/5</h5>
                          </div>
                        </div>
                        <div className="my-2">
                          <p className="w-100">
                            Ilmu data (bahasa Inggris: data science) adalah
                            suatu disiplin ilmu yang khusus mempelajari data,
                            khususnya data kuantitatif (data numerik), baik yang
                            terstruktur maupun tidak terstruktur.[1][2] Berbagai
                            subjek yang dibahas dalam ilmu data meliputi semua
                            proses data, mulai dari pengumpulan data, analisis
                            data, pengolahan data, manajemen data, kearsipan,
                            pengelompokan data, penyajian data, distribusi data,
                            hingga cara mengubah data menjadi kesatuan informasi
                            yang dapat dipahami semua orang.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                          <h4 className="fw-bold w-100 mt-1">Python Dasar</h4>
                          <div className="d-flex w-100 justify-content-end">
                            <Star value={4} width={35} height={35}></Star>
                            <h5 className="my-2 fw-bold">4/5</h5>
                          </div>
                        </div>
                        <div className="my-2">
                          <p className="w-100">
                            Ilmu data (bahasa Inggris: data science) adalah
                            suatu disiplin ilmu yang khusus mempelajari data,
                            khususnya data kuantitatif (data numerik), baik yang
                            terstruktur maupun tidak terstruktur.[1][2] Berbagai
                            subjek yang dibahas dalam ilmu data meliputi semua
                            proses data, mulai dari pengumpulan data, analisis
                            data, pengolahan data, manajemen data, kearsipan,
                            pengelompokan data, penyajian data, distribusi data,
                            hingga cara mengubah data menjadi kesatuan informasi
                            yang dapat dipahami semua orang.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
