/** @format */

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../config/env";
import axios from "axios";
import MateriBox from "./materi";

export default function ModulEach(props) {
  const [cookie] = useCookies();
  //Set data from props
  const modul_id = props.modul_id;
  const judul = props.judul;
  const order = props.order;
  const course_id = props.course;

  //state for update judul Modul
  const [updateJudul, setUpdateJudul] = useState(judul);

  //Default values
  const defaultMateriGet = {
    "jumlah-materi": 0,
    materi: [],
  };
  const defaultMateri = {
    modul_id: modul_id,
    type_materi: 1,
    title: "",
    file_materi: "",
    order: 0,
  };

  //state for new Materi
  const [newMateri, setNewMateri] = useState(defaultMateri);

  //state for get Materi
  const [materi, setMateri] = useState(defaultMateriGet);

  //////////////////Manage Modul Functions
  //onChangeModulTitle
  const onChangeModulTitle = (e) => {
    console.log(e.target.value);
    setUpdateJudul(e.target.value);
    console.log(updateJudul);
  };

  //handle Update Modul
  const handleUpdate = (e) => {
    props.update(modul_id, course_id, updateJudul, order);
  };

  //handle delete Modul
  const handleDelete = (e) => {
    props.delete(modul_id);
  };

  //////////////////Manage Materi Functions
  //Get Course information
  function getAndSetMateriData(modul_id) {
    axios
      .get(`${BACKEND_URL}/api/v1/moduls/${modul_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        setMateri(response.data.data);
        console.log("[]dataMateri", materi);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  useEffect(() => {
    getAndSetMateriData(modul_id);
  }, []);

  //Create Materi
  function createMateri(modul_id, title, order, type_materi, file_materi) {
    axios
      .post(
        `${BACKEND_URL}/api/v1/materi`,
        {
          modul_id,
          type_materi,
          title,
          file_materi,
          order,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.userData.token}`,
          },
        }
      )
      .then(function (response) {
        alert(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.message, 2));
        console.log(JSON.stringify(error, 2));
      });
  }

  //onChangeNewMateri
  const onChangeNewMateri = (e) => {
    console.log(e.target.value);
    setNewMateri({
      ...newMateri,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit New Materi
  const handleSubmitNewMateri = (e) => {
    const [modul_id, title, type_materi, file_materi] = newMateri;
    createMateri(
      modul_id,
      title,
      materi.materi.length + 1,
      type_materi,
      file_materi
    );
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
            <MateriBox modul_id={modul_id} data={materi.materi} />
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
                      onChange={onChangeModulTitle}
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

      <div>
        {/* Modal Buat Materi*/}
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
                      aria-label="Default select example"
                      onChange={onChangeNewMateri}>
                      <option value={2}>video</option>
                      <option value={1}>materi</option>
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
                      value={newMateri.title}
                      onChange={onChangeNewMateri}
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
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmitNewMateri}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
