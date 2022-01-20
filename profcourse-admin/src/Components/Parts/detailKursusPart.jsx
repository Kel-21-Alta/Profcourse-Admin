/** @format */

import Star from "../Usable/Star";

export default function DetailKursusEdit() {
  return (
    <>
      <div className="row mx-4">
        <div className="col-md-6">
          <h1 className="fw-bold">Detail Kursus</h1>
          <div className="row">
            <div className="col-md-8">
              <h3 className="text-thirtiery fw-bolder">Kursus Data Science</h3>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                aria-label="Default select example">
                <option selected>Draft</option>
                <option value="1">Publik</option>
              </select>
            </div>
          </div>
          <p className="mt-3">
            Ilmu data (bahasa Inggris: data science) adalah suatu disiplin ilmu
            yang khusus mempelajari data, khususnya data kuantitatif (data
            numerik), baik yang terstruktur maupun tidak terstruktur.[1][2]
            Berbagai subjek yang dibahas dalam ilmu data meliputi semua proses
            data, mulai dari pengumpulan data, analisis data, pengolahan data,
            manajemen data, kearsipan, pengelompokan data, penyajian data,
            distribusi data, hingga cara mengubah data menjadi kesatuan
            informasi yang dapat dipahami semua orang.
          </p>
          <button
            className="btn btn-thirtiery"
            data-toggle="modal"
            data-target="#buatmodul">
            Tambah Modul
          </button>
          <div
            className="container py-3 px-3 mt-4"
            style={{
              width: "100%",
              backgroundColor: "#DEE2E6",
              "border-radius": "15px",
              border: "none",
            }}>
            <div className="px-3 py-2">
              <div className="d-flex">
                <div>
                  <div>
                    <h5 className="fw-bolder">Modul 1</h5>
                  </div>
                </div>
                <div className="mx-2">
                  <div className="d-flex gap-1">
                    <button
                      className="btn link-thirtiery p-0"
                      data-toggle="modal"
                      data-target="#updatemodul">
                      Ubah
                    </button>
                    <button
                      className="btn link-thirtiery p-0"
                      data-toggle="modal"
                      data-target="#hapus">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div>Materi 1: Fundamental Statistic</div>
                      <div className="w-100 d-flex gap-2 justify-content-end">
                        <button
                          className="btn link-thirtiery p-0"
                          data-toggle="modal"
                          data-target="#updatemateri">
                          Ubah
                        </button>
                        <button
                          className="btn link-thirtiery p-0"
                          data-toggle="modal"
                          data-target="#hapusmateri">
                          Hapus
                        </button>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div>Materi 2</div>
                      <div className="w-100 d-flex gap-2 justify-content-end">
                        <button
                          className="btn link-thirtiery p-0"
                          data-toggle="modal"
                          data-target="#updatemateri">
                          Ubah
                        </button>
                        <button
                          className="btn link-thirtiery p-0"
                          data-toggle="modal"
                          data-target="#hapusmateri">
                          Hapus
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-end my-2">
                <button
                  className="btn btn-thirtiery"
                  data-toggle="modal"
                  data-target="#buatmateri">
                  Tambah Materi
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 my-3 py-3 pe-3">
          <div className="d-flex justify-content-center">
            <img src="https://picsum.photos/200/300" alt="" srcset="" />
          </div>
          <div className="my-3 mx-lg-5 px-lg-5">
            <div className="d-flex justify-content-end my-1">
              <Star value={4} width={35} height={35}></Star>
              <h5 className="my-2 fw-bold">4/5</h5>
            </div>
            <div className="d-flex gap-2 my-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 47 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 13.375C35.5275 13.375 38.3537 10.5275 38.3537 7C38.3537 3.4725 35.5275 0.625 32 0.625C28.4725 0.625 25.625 3.4725 25.625 7C25.625 10.5275 28.4725 13.375 32 13.375ZM15 13.375C18.5275 13.375 21.3538 10.5275 21.3538 7C21.3538 3.4725 18.5275 0.625 15 0.625C11.4725 0.625 8.625 3.4725 8.625 7C8.625 10.5275 11.4725 13.375 15 13.375ZM15 17.625C10.0487 17.625 0.125 20.1112 0.125 25.0625V30.375H29.875V25.0625C29.875 20.1112 19.9513 17.625 15 17.625ZM32 17.625C31.3838 17.625 30.6825 17.6675 29.9387 17.7313C32.4037 19.5163 34.125 21.9175 34.125 25.0625V30.375H46.875V25.0625C46.875 20.1112 36.9513 17.625 32 17.625Z"
                  fill="#3252DF"
                />
              </svg>
              <h6 className="my-2">13 orang mengikuti kursus ini</h6>
            </div>
            <div className="my-3">
              <h5 className="fw-bolder">Rank Nilai</h5>
              <ol className="">
                <li className="border-bottom mb-2 pb-2">
                  Agus <div className="text-end fw-bold">12 pts</div>
                </li>
                <li className="border-bottom mb-2 pb-2">
                  Adrian Stanislaus Trisetya Siregar{" "}
                  <div className="text-end fw-bold">12 pts</div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL MODAL */}
      <div>
        {/* Modal Buat Modul*/}
        <div
          className="modal fade"
          id="buatmodul"
          tabIndex={-1}
          aria-labelledby="buatmodul"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Buat Modul
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
                <form action="#" className="p-3">
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="topikKursus">
                      Judul Modul
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul modul anda..."
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
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id="updatemodul"
          tabIndex={-1}
          aria-labelledby="updatemodul"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Modul
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
                <form action="#" className="p-3">
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="topikKursus">
                      Judul Modul
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul modul anda..."
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
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="hapus"
          tabIndex={-1}
          aria-labelledby="hapus"
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
                Apakah anda yakin untuk menghapus <b>modul 1</b> ini?
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

      <div>
        {/* Modal Buat Modul*/}
        <div
          className="modal fade"
          id="buatmateri"
          tabIndex={-1}
          aria-labelledby="buatmateri"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Buat Modul
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
                <form action="#" className="p-3">
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="tipemateri">
                      Tipe Materi
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>video</option>
                      <option value="1">materi</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul materi anda..."
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Unggah Materi
                    </label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-primary"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id="updatemateri"
          tabIndex={-1}
          aria-labelledby="updatemateri"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ubah Materi
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
                <form action="#" className="p-3">
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="tipemateri">
                      Tipe Materi
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      <option selected>video</option>
                      <option value="1">materi</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul materi anda..."
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Unggah Materi
                    </label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="hapusmateri"
          tabIndex={-1}
          aria-labelledby="hapusmateri"
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
                Apakah anda yakin untuk menghapus <b>materi 1</b> ini?
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
      {/* END MODAL */}
    </>
  );
}
