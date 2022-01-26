/** @format */

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../config/env";
import axios from "axios";
import MateriBox from "./materi";
import Quiz from "./quiz";

import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase";

export default function ModulEach(props) {
  const [cookie] = useCookies();
  //Set data from props
  const modul_id = props.modul_id;
  const judul = props.judul;
  const order = props.order;
  const course_id = props.course;

  //state for update judul Modul
  const [updateJudul, setUpdateJudul] = useState(judul);
  const [updateOrder] = useState(order);
  const [progress, setProgress] = useState(0);

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
    props.update(modul_id, course_id, updateJudul, updateOrder);
  };

  //handle delete Modul
  const handleDelete = (e) => {
    props.delete(modul_id);
    props.setDataChange(true);
  };

  const video_type = 2;
  const materi_type = 1;
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
  useEffect(() => {
    console.log(newMateri);
  }, [newMateri]);

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
    console.log(e.target.name, e.target.value);
    if (e.target.name === "type_materi") {
      setNewMateri({
        ...newMateri,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNewMateri({
        ...newMateri,
        [e.target.name]: e.target.value,
      });
    }
  };

  //handle submit New Materi
  const handleSubmitNewMateri = (e) => {
    let urutan;
    if (materi.materi === null) {
      urutan = 0;
    } else {
      urutan = materi.materi.length;
    }
    createMateri(
      newMateri.modul_id,
      newMateri.title,
      urutan + 1,
      newMateri.type_materi,
      newMateri.file_materi
    );
  };

  //upload file firebase
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setNewMateri({ ...newMateri, file_materi: url })
        );
      }
    );
  };

  const fileHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
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
            <MateriBox modul_id={modul_id} data={materi?.materi} />
          </div>
          <div>
            {" "}
            <Quiz modul_id={modul_id} />
          </div>
        </div>
        <div className="text-end my-2">
          <button
            className="btn btn-thirtiery"
            data-toggle="modal"
            data-target={`#buatMateri_${modul_id}`}>
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
          id={`buatMateri_${modul_id}`}
          tabIndex={-1}
          aria-labelledby={`buatMateri_${modul_id}`}
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Buat Materi
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
                <div className="p-3">
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="tipemateri">
                      Tipe Materi
                    </label>
                    <select
                      name="type_materi"
                      class="form-select"
                      aria-label="Default select example"
                      onChange={onChangeNewMateri}>
                      <option value={Number(video_type)}>video</option>
                      <option value={Number(materi_type)}>materi</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-weight-normal" htmlFor="judulmateri">
                      Judul Materi
                    </label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      placeholder="Judul materi anda..."
                      value={newMateri.title}
                      onChange={onChangeNewMateri}
                      required
                    />
                  </div>
                  <form onSubmit={fileHandler}>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Unggah Materi
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        name="file_materi"
                      />
                      <button className="btn btn-thirtiery" type="submit">
                        Upload
                      </button>
                      <div>Uploaded {progress}%</div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  id={`buatMateriBtn_${modul_id}`}
                  type="button"
                  className="btn btn-thirtiery"
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
