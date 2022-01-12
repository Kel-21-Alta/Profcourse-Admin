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
            <div className="row row-cols-1 row-cols-md-4 gap-3 text-center">
            <div class="card shadow col p-0 h-25" style={{'border-radius':'15px','border':'none',maxWidth: '17rem',}}>
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
  <div class="card shadow col p-0" style={{'border-radius':'15px','border':'none', maxWidth: '17rem'}}>
            <img src="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg" class="card-img-top p-0 m-0 w-100" alt="..." style={{ objectFit: "cover", 'border-radius':'15px 15px 0px 0px' }}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  <div class="card shadow col p-0" style={{'border-radius':'15px','border':'none', maxWidth: '17rem'}}>
            <img src="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg" class="card-img-top p-0 m-0 w-100" alt="..." style={{ objectFit: "cover", 'border-radius':'15px 15px 0px 0px' }}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  <div class="card shadow col p-0" style={{'border-radius':'15px','border':'none',maxWidth: '17rem'}}>
            <img src="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg" class="card-img-top p-0 m-0 w-100" alt="..." style={{ objectFit: "cover", 'border-radius':'15px 15px 0px 0px' }}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
</div>
        </div>
   
    );
}
