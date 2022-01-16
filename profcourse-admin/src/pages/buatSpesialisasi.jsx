import React from "react";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import Star from "../Components/Usable/Star";

export default function BuatSpesialisasi() {
  return (
    <>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar />
          <div class="col py-3">
            <AdminTab />
            <div className="mx-5 my-3">
                <h1 className="fw-bold">Buat Spesialisasi</h1>
               </div>
          </div>
        </div>
      </div>  
    </>
  );
}
