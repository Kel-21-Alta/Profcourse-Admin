/** @format */

import React from "react";
import DetailKursusEdit from "../Components/Parts/detailKursusPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function DetailKursus() {
  return (
    <>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar />
          <div class="col py-3">
            <AdminTab />
            <DetailKursusEdit />
          </div>
        </div>
      </div>
    </>
  );
}
