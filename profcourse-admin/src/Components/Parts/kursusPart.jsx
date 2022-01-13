import User from "../../assets/carbon_user-avatar-filled.png"
import { Link } from "react-router-dom";
export default function KursusPart(props){
    return (
        <div className="mx-5 my-3">
            <h2 className="fw-bold">Kursus</h2>
            <div className="d-flex justify-content-end gap-2 me-5 my-2">
                <button className="btn btn-thirtiery shadow">Buat Kursus</button>
                <Link to="buat"><button className="btn btn-thirtiery shadow">Buat Spesialisasi</button></Link>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Kursus</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Spesialisasi</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Publik</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Draf</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>

            <div className="d-flex my-2">
                <div className="py-2">
                    <input type="text" className="form-control-sm px-3" id="searchPengguna" name="searchPengguna"  placeholder="Cari Kursus" style={{'border-radius':'30px','background-color':'#E5E5E5','border':'none'}}/>
                </div>
                <div class="d-flex justify-content-end w-100 py-2 px-5">
                <div className="mx-2">urutkan:</div>
                <div>
                <select className="form-select form-select-sm d-block" aria-label=".form-select-sm example" style={{'border-radius':'30px',}}>
                    <option selected>A-Z</option>
                    <option value="1">Z-A</option>
                    <option value="2">Terpopuler</option>
                    <option value="3">Terbaru</option>
                    <option value="3">Ulasan Tinggi</option>
                </select>
                </div>
                </div>
            </div>
            <div className="container mx-3 p-0">
            <div className="row row-cols-1 row-cols-md-3 gap-5 text-center">
            <div class="card shadow col p-0 h-25" style={{'border-radius':'15px','border':'none',maxWidth: '20rem',}}>
            <img src="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg" class="card-img-top p-0 m-0 w-100" alt="..." style={{ objectFit: "cover", 'border-radius':'15px 15px 0px 0px' }}/>
  <div class="card-body">
    <h5 class="card-title">Data Science</h5>
    <div className="d-flex justify-content-center">
    <select className="form-select form-select-sm d-block my-3 w-50" aria-label=".form-select-sm example" style={{'border-radius':'30px',}}>
                    <option selected>Draft</option>
                    <option value="1">Publish</option>
                </select>
    </div>
    <div className="">
    <a href="#" class="btn btn-thirtiery align-self-end">Detail Kursus</a>
    </div>
  </div>
  </div>
</div>
</div>
        </div>
   
    );
}
