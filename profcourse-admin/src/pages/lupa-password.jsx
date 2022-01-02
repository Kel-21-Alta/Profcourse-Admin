import LoginImage from "../assets/Group1.png";
import { Link } from "react-router-dom";
export default function LupaPassword(){
    return (
        <div
        className=" bg-thirtiery m-0 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
          <div className="container px-5" >
              <div class="shadow-lg mx-lg-3" style={{'color':'#152C5B'}}>
                    <div className="row rounded" style={{backgroundColor: "white" , minHeight: "75vh"}}>
                    <div class="col-lg-6 rounded-start" style={{backgroundColor: "#BACBEE" }}>
                    <div className="col-md-12 text-center pt-3 d-flex justify-content-center h-100  align-items-center">
                      <img src={LoginImage} alt="" width={300}/>
                    </div>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-center align-items-center" >
                        <div className="px-5 py-lg-5 mx-lg-5 my-5 justify-content-center align-items-center">
                    <div className="d-flex">
                    <div className="w-100 text-center">
                      <h3 className="mb-4 fw-bold">Lupa Password</h3>
                    </div>
                  </div>
                  <form action="#" className="">
                    <div className="form-group mb-3">
                      <label className="fw-normal" htmlFor="Email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Masukkan email anda"
                        required
                      />
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-thirtiery w-100 shadow" >
                        Reset Kata Sandi
                      </button>
                    </div>
                  </form>
                  <div className="form-group">
                      <div
                        className="w-100 text-right d-flex justify-content-center"
                      >
                        <Link to="/login"> <button type="link" href="/" className="btn btn-link" style={{ fontSize: "12px" }}>
                          Masuk lewat sini.
                        </button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                    </div>
                    </div>
                
                </div>
          
    </div>
    );
}