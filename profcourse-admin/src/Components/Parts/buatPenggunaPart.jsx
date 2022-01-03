export default function BuatPenggunaPart(){
    return (
        <div className="mx-5 my-3">
            <h2 className="fw-bold">Buat Pengguna</h2>
            <form action="#" className=" my-3">
                    <div className="form-group mb-3">
                      <label className="fw-normal mb-2" htmlFor="Email">
                        Nama
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan nama pengguna baru"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="fw-normal mb-2" htmlFor="password">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="masukkan email pengguna baru"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <div
                        className="w-100 text-right d-flex justify-content-end"
                        style={{ fontSize: "10px" }}
                      >
                      </div>
                    </div>
                    <div className="form-group d-flex justify-content-end gap-2 my-2">
                    <button className="btn btn-danger shadow" >
                        Batal
                      </button>
                      <button className="btn btn-thirtiery shadow" >
                        Simpan
                      </button>
                    </div>
                  </form>
        </div>
   
    );
}