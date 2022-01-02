export default function DashboardPart(props){
    return (
        <div className="mx-5 my-3">
            <h2 className="fw-bold">Dashboard</h2>
            <div className="container my-4">
            <div className="row mx-auto justify-content-center">
            <div class="card col-md-3 mx-4 shadow border-0   py-4 my-2" style={{'border-radius':'15px',}}>
                <div class="card-body text-center">
                    <h1 className="fw-bold ">12</h1>
                    <h3 className="">Kursus</h3>
                </div>
            </div>
            <div class="card col-md-3 mx-4 shadow border-0 py-4 my-2" style={{'border-radius':'15px',}}>
                <div class="card-body text-center">
                    <h1 className="fw-bold">129</h1>
                    <h3 className="">Pengguna</h3>
                </div>
            </div>
            <div class="card col-md-3 mx-4 shadow border-0 py-4 my-2" style={{'border-radius':'15px',}}>
                <div class="card-body text-center">
                    <h1 className="fw-bold">9</h1>
                    <h3 className="">Spesialisasi</h3>
                </div>
            </div>
            </div>
            </div>
            <div className="mt-4">
                <h6 className="fw-bold">Leaderboards</h6>
                <div>
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Kelas Diambil</th>
                    <th scope="col">Total Point</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>5</td>
                    <td>50</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>6</td>
                    <td>45</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>4</td>
                    <td>30</td>
                    </tr>
                </tbody>
                </table>
                <div className="d-flex justify-content-end">
                <button type="button"class="btn btn-thirtiery align-item-end shadow">lebih banyak</button>
                </div>
                </div>
            </div>
        </div>
   
    );
}
