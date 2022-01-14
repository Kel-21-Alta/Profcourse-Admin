import React from "react";
import { Link } from "react-router-dom";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import Star from "../Components/Usable/Star";

export default function CreateKursus() {
  return (
    <>
      <div className="container-fluid p-0">
        <div class="row flex-nowrap">
          <Sidebar />
          <div class="col py-3">
            <AdminTab />
            <div className="row mx-4">
              <div className="col-md-6">
                <h1 className="fw-bold">Detail Kursus</h1>
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="text-thirtiery fw-bolder">
                      Kursus Data Science
                    </h3>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Draft</option>
                      <option value="1">Publik</option>
                    </select>
                  </div>
                </div>
                <p className="mt-3">
                  Ilmu data (bahasa Inggris: data science) adalah suatu disiplin
                  ilmu yang khusus mempelajari data, khususnya data kuantitatif
                  (data numerik), baik yang terstruktur maupun tidak
                  terstruktur.[1][2] Berbagai subjek yang dibahas dalam ilmu
                  data meliputi semua proses data, mulai dari pengumpulan data,
                  analisis data, pengolahan data, manajemen data, kearsipan,
                  pengelompokan data, penyajian data, distribusi data, hingga
                  cara mengubah data menjadi kesatuan informasi yang dapat
                  dipahami semua orang.
                </p>
                <button className="btn btn-thirtiery">Tambah Modul</button>
                <div
                  className="container py-3 px-4 rounded mt-4"
                  style={{ width: "100%", backgroundColor: "#DEE2E6" }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <h3 className="font-weight-bolder">Modul 1</h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-end">
                        <button
                          className="btn mx-4"
                          data-toggle="modal"
                          data-target="#exampleModalCreate1"
                        >
                          Ubah
                        </button>
                        <button
                          className="btn"
                          data-toggle="modal"
                          data-target="#exampleModalCreate1"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <ul>
                        <li>
                          <div>
                            Modul
                            <div className="text-end">
                              <Link to="/saew" className="mx-4">
                                Ubah
                              </Link>
                              <Link to="/saew">Hapus</Link>
                            </div>
                          </div>
                        </li>
                        <hr />
                        <li>
                          <div>
                            Modul
                            <div className="text-end">
                              <Link to="/saew" className="mx-4">
                                Ubah
                              </Link>
                              <Link to="/saew">Hapus</Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-thirtiery">Tambah Materi</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <img src="https://picsum.photos/200/300" alt="" srcset="" />
                <div
                  className=" "
                  style={{ fontSize: "40px", display: "inline" }}
                >
                  {" "}
                  <p style={{ fontSize: "20px" }}>
                    {" "}
                    <i className="fas fa-user-friends	px-3"></i> 13 Orang
                    mengambil kursus ini
                  </p>
                </div>
                <div>
                  <Star value={4} width={35} height={35}></Star>
                  <h5 className="font-weight-bolder">Rank Nilai</h5>
                  <ul>
                    <li>
                      Agus <div className="text-end">12 pts</div>
                    </li>
                    <hr />
                    <li>
                      Agus <div className="text-end">12 pts</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL BUAT COURSE */}
      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="exampleModalCreate1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Membuat Kursus
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
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://picsum.photos/200/300"
                      className="card-img my-3"
                      alt="..."
                      height={180}
                      width={342}
                      style={{ objectFit: "cover" }}
                    />
                    <input type="file" name="" id="" />
                  </div>
                  <div className="col-md-6">
                    <form action="#" className="signin-form">
                      <div className="form-group mb-3">
                        <div>
                          <label htmlFor="exampleFormControlSelect1">
                            Bidang Kursus
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Kursus Online</option>
                            <option>Konseling</option>
                            <option>Training</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="topikKursus"
                        >
                          Topik Kursus
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Topik kursus anda..."
                          required
                        />
                      </div>
                      {/* <div className="form-group text-right">
                          <Button className="btn" isPrimary hasShadow>
                            Ajukan Kursus
                          </Button>
                        </div> */}
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-primary"
                  href="/buat-kursus"
                >
                  Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MODAL BUAT COURSE */}
      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
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
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Apakah anda yakin untuk menghapus request course ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
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
