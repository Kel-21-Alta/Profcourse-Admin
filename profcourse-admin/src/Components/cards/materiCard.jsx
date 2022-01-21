/** @format */

import { useState } from "react";

export default function MateriCard(props) {
  //   const [id, url_materi, type, title, order] = props.data;
  const modul_id = props.modul_id;
  //   const [updateMateri, setUpdateMateri] = useState({
  //     modul_id: modul_id,
  //     type_materi: type,
  //     title: title,
  //     file_materi: url_materi,
  //     order: order,
  //   });
  //   //onChange
  //   const onChange = (e) => {
  //     console.log(e.target.value);
  //     setUpdateMateri({
  //       ...updateMateri,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleUpdate = (e) => {
  //     props.update(updateMateri.modul_id, updateMateri.type_materi, updateMateri.title, updateMateri.file_materi, updateMateri.order);
  //   };
  //   const handleDelete = (e) => {
  //     props.delete(id);
  //   };
  return (
    <>
      <div>
        Materi {props.data.order}: {props.data.title}
      </div>
      <div className="w-100 d-flex gap-2 justify-content-end">
        <button
          className="btn link-thirtiery p-0"
          data-toggle="modal"
          data-target={`#updateMateri_${props.data.id}`}>
          Ubah
        </button>
        <button
          className="btn link-thirtiery p-0"
          data-toggle="modal"
          data-target={`#deleteMateri_${props.data.id}`}>
          Hapus
        </button>
      </div>

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id={`updateMateri_${props.data.id}`}
          tabIndex={-1}
          aria-labelledby={`updateMateri_${props.data.id}`}
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
                      aria-label="Default select example"
                      //   onChange={onChange}
                      value={props.data.type}>
                      <option value={1}>materi</option>
                      <option value={2}>video</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      type="text"
                      value={props.data.title}
                      className="form-control"
                      placeholder="Judul materi anda..."
                      //   onChange={onChange}
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
                <button
                  id={`updateMateriButton_${props.data.id}`}
                  type="button"
                  className="btn btn-thirtiery"
                  //   onClick={handleUpdate}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id={`hapusMateri_${props.data.id}`}
          tabIndex={-1}
          aria-labelledby={`hapusMateri_${props.data.id}`}
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
                Apakah anda yakin untuk menghapus materi{" "}
                <b>{props.data.title}</b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Tidak
                </button>
                <button
                  id={`hapusMateriButton_${props.data.id}`}
                  type="button"
                  className="btn btn-danger"
                  //   onClick={handleDelete}
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {/* END MODAL */}
    </>
  );
}
