/** @format */

export default function DeleteModalUser(props) {
  return (
    <div>
      {/* Modal Hapus*/}
      <div
        className="modal fade"
        id={`hapus_${props.data.id}`}
        tabIndex={-1}
        aria-labelledby={`hapus_${props.data.id}`}
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
            <div className="modal-body text-start">
              Apakah anda yakin untuk menghapus pengguna{" "}
              <b>{props.data.name}</b> ini?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">
                Tidak
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  props.del(props.data.id);
                }}
                data-dismiss="modal">
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
