import React from "react";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import Star from "../Components/Usable/Star";

export default function DetailSpesialisasi() {
  return (
    <>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar />
          <div class="col py-3">
            <AdminTab />
            
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
          aria-hidden="true"
        >
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
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                    <form action="#" className="p-3">
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="topikKursus"
                        >
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
                  href="/buat-kursus"
                >
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
          aria-hidden="true"
        >
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
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                    <form action="#" className="p-3">
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="topikKursus"
                        >
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
                  href="/buat-kursus"
                >
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
              <div className="modal-body">
                Apakah anda yakin untuk menghapus <b>modul 1</b> ini?
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

      <div>
        {/* Modal Buat Modul*/}
        <div
          className="modal fade"
          id="buatmateri"
          tabIndex={-1}
          aria-labelledby="buatmateri"
          aria-hidden="true"
        >
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
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <form action="#" className="p-3">
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="tipemateri"
                        >
                          Tipe Materi
                        </label>
                        <select class="form-select" aria-label="Default select example">
  <option selected>video</option>
  <option value="1">materi</option>
</select>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="judulmateri"
                        >
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
  <label for="formFile" class="form-label">Unggah Materi</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
                    </form>
                 
                 
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-primary"
                  href="/buat-kursus"
                >
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
          aria-hidden="true"
        >
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
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                    <form action="#" className="p-3">
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="tipemateri"
                        >
                          Tipe Materi
                        </label>
                        <select class="form-select" aria-label="Default select example">
  <option selected>video</option>
  <option value="1">materi</option>
</select>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="judulmateri"
                        >
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
  <label for="formFile" class="form-label">Unggah Materi</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
                    </form>
                 
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="/buat-kursus"
                >
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
              <div className="modal-body">
                Apakah anda yakin untuk menghapus <b>materi 1</b> ini?
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
      {/* END MODAL */}

      
    </>
  );
}
