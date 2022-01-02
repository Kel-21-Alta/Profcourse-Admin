import User from "../../assets/carbon_user-avatar-filled.png"
import { Link } from "react-router-dom";
export default function PenggunaPart(props){
    return (
        <div className="mx-5 my-3">
            <h2 className="fw-bold">Pengguna</h2>
            <div className="d-flex justify-content-end gap-2 me-5 my-2">
                <button className="btn btn-thirtiery shadow">Unduh Report Pengguna</button>
                <Link to="/buat"><button className="btn btn-thirtiery shadow">Buat Pengguna</button></Link>
            </div>
            <div className="d-flex my-2">
                <div className="py-2">
                    <input type="text" className="form-control-sm px-3" id="searchPengguna" name="searchPengguna"  placeholder="Cari Pengguna" style={{'border-radius':'30px','background-color':'#E5E5E5','border':'none'}}/>
                </div>
                <div class="d-flex justify-content-end w-100 py-2 px-5">
                <div className="mx-2">urutkan:</div>
                <div>
                <select className="form-select form-select-sm d-block" aria-label=".form-select-sm example" style={{'border-radius':'30px',}}>
                    <option selected>A-Z</option>
                    <option value="1">Z-A</option>
                    <option value="2">Poin Tertinggi</option>
                    <option value="3">Poin Terendah</option>
                    <option value="3">Terbaru</option>
                </select>
                </div>
                </div>
            </div>
            <div className="">
            <div class="card border-0 shadow-lg my-1" style={{'border-radius':'30px',}}>
  <div class="card-body d-flex">
    <img src={ User }></img>
    <div className="fw-bold">John Smith</div>
  </div>
</div>
<div class="card border-0 shadow-lg my-1" style={{'border-radius':'30px',}}>
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
<div class="card border-0 shadow-lg my-1" style={{'border-radius':'30px',}}>
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
            </div>
        </div>
   
    );
}
