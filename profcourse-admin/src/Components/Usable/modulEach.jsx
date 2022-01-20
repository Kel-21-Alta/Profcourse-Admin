/** @format */

export default function ModulEach(props) {
  console.log("modul each", props.judul);
  //const [modul_id, name_modul, order] = props.data;
  return (
    <div className="px-3 py-2">
      <div className="d-flex">
        <div>
          <div>
            <h5 className="fw-bolder">
              Modul {props.order}: {props.judul}
            </h5>
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
  );
}
