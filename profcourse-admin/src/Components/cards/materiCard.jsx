/** @format */

import { useState } from "react";

export default function MateriCard(props) {
  //   const [id, url_materi, type, title, order] = props?.data;
  const id = props.data.id;
  const url_materi = props.data.url_materi;
  const type = props.data.type;
  const title = props.data.title;
  const order = props.data.order;
  const modul_id = props.modul_id;

  const [updateMateri, setUpdateMateri] = useState({
    modul_id: props.data.modul_id,
    type_materi: props.data.type,
    title: props.data.title,
    file_materi: props.data.url_materi,
    order: props.data.order,
  });
  //onChange
  const onChange = (e) => {
    console.log(e.target.value);
    setUpdateMateri({
      ...updateMateri,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    props.update(
      id,
      modul_id,
      updateMateri.type_materi,
      updateMateri.title,
      updateMateri.order,
      updateMateri.file_materi
    );
  };
  const handleDelete = (e) => {
    props.delete(id);
  };
  return (
    <>
      <div>
        Materi {order}: {title}
      </div>
      <div className="w-100 d-flex gap-2 justify-content-end">
        <button
          className="btn link-thirtiery p-0"
          data-toggle="modal"
          data-target={`#updateMateri_${id}`}>
          Ubah
        </button>
        <button
          className="btn link-thirtiery p-0"
          data-toggle="modal"
          data-target={`#hapusMateri_${id}`}>
          Hapus
        </button>
      </div>

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id={`updateMateri_${id}`}
          tabIndex={-1}
          aria-labelledby={`updateMateri_${id}`}
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
                      name="type_materi"
                      class="form-select"
                      aria-label="Default select example"
                      onChange={onChange}
                      value={updateMateri.type_materi}>
                      <option value={1}>materi</option>
                      <option value={2}>video</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      name="title"
                      type="text"
                      value={updateMateri.title}
                      className="form-control"
                      placeholder="Judul materi anda..."
                      onChange={onChange}
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
                  onClick={handleUpdate}>
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
          id={`hapusMateri_${id}`}
          tabIndex={-1}
          aria-labelledby={`hapusMateri_${id}`}
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
                Apakah anda yakin untuk menghapus materi
                <b>{title}</b> ini?
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
                  onClick={handleDelete}>
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
