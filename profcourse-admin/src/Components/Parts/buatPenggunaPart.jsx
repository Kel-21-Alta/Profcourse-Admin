import { useState } from "react"
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";

export default function BuatPenggunaPart(){
  //cookies
  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token
  //axios fetching
  function registerUser(name,email) {
    axios.post('http://3.133.85.122:9090/api/v1/users', {
      "name": name,
      "email": email,
      "role" : 2
    }, {
      headers: {
         Authorization: `Bearer ${jwtToken}`
      }
   })
    .then(function (response) {
      console.log(response)
      setIsLoading(false)
      alert(`user dengan nama ${name} dan email ${email} berhasil ditambahkan`)
      setRegister(empyRegister)
    })
    .catch(function (error) {
      setIsLoading(false)
      alert(error.response.data.message)
    });;
  }
//hooks
const empyRegister = ({
  name : "",
  email: "",
})
const [register, setRegister] = useState(empyRegister);
const [isLoading, setIsLoading] = useState(false);

//functions
const onChange = (e) => {
  console.log(e)
  setRegister({
    ...register,
    [e.target.name]: e.target.value,
  })
  
};

const handleSubmit = (e) => {
      setIsLoading(true)
      const newRegister = register
      registerUser(newRegister.name,newRegister.email)
      e.preventDefault();
};



    return (
        <div className="mx-5 my-3">
            <h2 className="fw-bold">Buat Pengguna</h2>
            <form onSubmit={handleSubmit} className="my-3">
                    <div className="form-group mb-3">
                      <label className="fw-normal mb-2" htmlFor="Email">
                        Nama
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Masukkan nama pengguna baru"
                        value={register.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="fw-normal mb-2" htmlFor="password">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="masukkan email pengguna baru"
                        value={register.email}
                        onChange={onChange}
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
                   <Link to="/pengguna"> <button className="btn btn-danger shadow" >
                        Kembali
                      </button></Link>
                      <button type="submit" className="btn btn-thirtiery shadow" >
                        Simpan
                      </button>
                    </div>
                  </form>
                  {isLoading && <div>Mendaftarkan pengguna...</div>}
        </div>
   
    );
}