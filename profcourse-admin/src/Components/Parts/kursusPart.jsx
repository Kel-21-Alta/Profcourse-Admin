// import User from "../../assets/carbon_user-avatar-filled.png";
import { Link } from "react-router-dom";
export default function KursusPart(props) {
  return (
    <>
      <div className="mx-5 my-3">
        <h2 className="fw-bold">Kursus</h2>
        <div className="d-flex justify-content-end gap-2 me-5 my-2">
          <button
            className="btn btn-thirtiery shadow"
            data-toggle="modal"
            data-target="#exampleModalCreate1"
          >
            Buat Kursus
          </button>
          <Link to="buat">
            <button className="btn btn-thirtiery shadow">
              Buat Spesialisasi
            </button>
          </Link>
        </div>
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Kursus
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Spesialisasi
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Publik
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Draf
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            />
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            />
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            />
          </div>
        </div>

        <div className="d-flex my-2">
          <div className="py-2">
            <input
              type="text"
              className="form-control-sm px-3"
              id="searchPengguna"
              name="searchPengguna"
              placeholder="Cari Kursus"
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
              >
                <option selected>A-Z</option>
                <option value="1">Z-A</option>
                <option value="2">Terpopuler</option>
                <option value="3">Terbaru</option>
                <option value="3">Ulasan Tinggi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container mx-3 p-0">
          <div className="row row-cols-1 row-cols-md-3 gap-5 text-center">
            <div
              class="card shadow col p-0 h-25"
              style={{
                "border-radius": "15px",
                border: "none",
                maxWidth: "20rem",
              }}
            >
              <img
                src="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg"
                class="card-img-top p-0 m-0 w-100"
                alt="..."
                style={{
                  objectFit: "cover",
                  "border-radius": "15px 15px 0px 0px",
                }}
              />
              <div class="card-body">
                <h5 class="card-title">Data Science</h5>
                <div className="d-flex justify-content-center">
                  <select
                    className="form-select form-select-sm d-block my-3 w-50"
                    aria-label=".form-select-sm example"
                    style={{ "border-radius": "30px" }}
                  >
                    <option selected>Draft</option>
                    <option value="1">Publish</option>
                  </select>
                </div>
                <div className="">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" class="btn btn-thirtiery align-self-end">
                    Detail Kursus
                  </a>
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
    </>
  );
}
