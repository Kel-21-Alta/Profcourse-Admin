import { Link } from "react-router-dom";
import { useState } from "react";
import KursusTab from "../Usable/kursusTab";

export default function KursusPart(props) {
  const [tabs,setTabs] = useState(1)
  const toggleTab = (index) => {
    setTabs(index)
    console.log(tabs)
  }
  return (
      <div className="mx-5 my-3">
        <h2 className="fw-bold">Kursus</h2>
        <div className="d-flex justify-content-end gap-2 me-5 my-2">
          <button
            className="btn btn-thirtiery shadow"
            data-toggle="modal"
            data-target="#exampleModalCreate1"
          >
            Buat Kursus
          </button>
          <Link to="spesialisasi">
            <button className="btn btn-thirtiery shadow">
              Buat Spesialisasi
            </button>
          </Link>
          </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button onClick={()=>toggleTab(1)} class={tabs === 1 ? "nav-link active" : "nav-link"} id="kursus-tab" data-bs-toggle="tab" data-bs-target="#kursus" type="button" role="tab" aria-controls="kursus" aria-selected="true">Kursus</button>
  </li>
  <li class="nav-item" role="presentation">
    <button onClick={()=>toggleTab(2)} class={tabs === 2 ? "nav-link active" : "nav-link"} id="spesialisasi-tab" data-bs-toggle="tab" data-bs-target="#spesialisasi" type="button" role="tab" aria-controls="spesialisasi" aria-selected="false">Spesialisasi</button>
  </li>
  <li class="nav-item" role="presentation">
    <button onClick={()=>toggleTab(3)} class={tabs === 3 ? "nav-link active" : "nav-link"} id="publik-tab" data-bs-toggle="tab" data-bs-target="#publik" type="button" role="tab" aria-controls="publik" aria-selected="false">Publik</button>
  </li>
  <li class="nav-item" role="presentation">
    <button onClick={()=>toggleTab(4)} class={tabs === 4 ? "nav-link active" : "nav-link"} id="draf-tab" data-bs-toggle="tab" data-bs-target="#draf" type="button" role="tab" aria-controls="draf" aria-selected="false">Draf</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class={tabs === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="kursus" role="tabpanel" aria-labelledby="kursus-tab"><KursusTab/></div>
  <div class={tabs === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="spesialisasi" role="tabpanel" aria-labelledby="spesialisasi-tab">spesialisasi</div>
  <div class={tabs === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="publik" role="tabpanel" aria-labelledby="publik-tab">publik</div>
  <div class={tabs === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="draf" role="tabpanel" aria-labelledby="draf-tab">draf</div>
</div>
{/* MODAL BUAT COURSE */}
<div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id="exampleModalCreate1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Buat Kursus
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
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img
                      src="https://picsum.photos/200/300"
                      className="card-img my-3"
                      alt="..."
                      height={180}
                      width={342}
                      style={{ objectFit: "cover" }}
                    />
                    <input type="file" name="file" id="file" className="btn btn-thirtiery"/>
                  </div>
                  <div className="col-md-6">
                    <form action="#" className="signin-form">
                      <div className="form-group mb-3">
                        <div>
                          <label htmlFor="exampleFormControlSelect1">
                            Judul
                          </label>
                          <input type="text" class="form-control" id="judul" placeholder="Judul Kursus" required/>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="font-weight-normal"
                          htmlFor="deskripsi"
                        >
                          Deskripsi
                        </label>
                        <textarea class="form-control" id="deskripsi" rows="3" placeholder="Deskripsi Kursus" required></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  type="button"
                  className="btn btn-thirtiery"
                  href="buat-kursus"
                >
                  Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MODAL BUAT COURSE */}
        </div>
        
  );
}
