/** @format */

import { useEffect, useState } from "react";

export default function ModulEach(props) {
  const modul_id = props.modul_id;
  const judul = props.judul;
  const order = props.order;
  const course_id = props.course;
  const [updateJudul, setUpdateJudul] = useState(judul);
  //onChangeTitle
  const onChange = (e) => {
    console.log(e.target.value);
    setUpdateJudul(e.target.value);
    console.log(updateJudul);
  };

  const handleUpdate = (e) => {
    props.update(modul_id, course_id, updateJudul, order);
  };
  const handleDelete = (e) => {
    props.delete(modul_id);
  };

  return (
    <>
      <div className="px-3 py-2">
        <div className="d-flex">
          <div>
            <div>
              <h5 className="fw-bolder">
                Modul {order}: {judul}
              </h5>
            </div>
          </div>
          <div className="mx-2">
            <div className="d-flex gap-1">
              <button
                className="btn link-thirtiery p-0"
                data-toggle="modal"
                data-target={`#updateModul_${modul_id}`}>
                Ubah
              </button>
              <button
                className="btn link-thirtiery p-0"
                data-toggle="modal"
                data-target={`#hapusModul_${modul_id}`}>
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

      <div>
        {/* Modal Update Modul*/}
        <div
          className="modal fade"
          id={`updateModul_${modul_id}`}
          tabIndex={-1}
          aria-labelledby={`updateModul_${modul_id}`}
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
                      value={updateJudul}
                      onChange={onChange}
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
                <button
                  id={`update_${modul_id}`}
                  type="button"
                  className="btn btn-thirtiery"
                  data-dismiss="modal"
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
          id={`hapusModul_${modul_id}`}
          tabIndex={-1}
          aria-labelledby={`hapusModul_${modul_id}`}
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
                Apakah anda yakin untuk menghapus modul <b>{judul}</b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Tidak
                </button>
                <button
                  id={`delete_${modul_id}`}
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={handleDelete}>
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
