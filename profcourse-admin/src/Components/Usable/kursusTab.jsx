/** @format */

import KursusCard from "../cards/kursusCard";

export default function KursusTab(props) {
  console.log(props.data);
  return (
    <div>
      <div className="d-flex my-2">
        <div className="py-2">
          <input
            type="text"
            className="form-control-sm px-3"
            id="searchPengguna"
            name="searchPengguna"
            placeholder="Cari Kursus"
            style={{
              "border-radius": "30px",
              "background-color": "#E5E5E5",
              border: "none",
            }}
          />
        </div>
        <div class="d-flex justify-content-end w-100 py-2 px-5">
          <div className="mx-2">urutkan:</div>
          <div>
            <select
              className="form-select form-select-sm d-block"
              aria-label=".form-select-sm example"
              style={{ "border-radius": "30px" }}>
              <option value={1}>A-Z</option>
              <option value={2}>Z-A</option>
              <option value={3}>Terpopuler</option>
              <option value={4}>Terbaru</option>
              <option value={5}>Ulasan Tinggi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-3 p-0">
        <div className="row row-cols-1 row-cols-md-3 gap-5 text-center">
          {props.data?.map((item) => (
            <KursusCard key={item.course_id} data={item} del={props.del} />
          ))}
        </div>
      </div>
    </div>
  );
}
