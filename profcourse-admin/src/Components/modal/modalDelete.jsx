export default function DeleteModal(props){
    return(
        <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="hapuscourse"
          tabIndex={-1}
          aria-labelledby="hapuscourse"
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
              <div className="modal-body text-start">
                Apakah anda yakin untuk menghapus <b></b> ini?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Tidak
                </button>
                <button type="button" className="btn btn-danger" >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}