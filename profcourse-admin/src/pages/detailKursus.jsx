/** @format */

import React from "react";
import DetailKursusEdit from "../Components/Parts/detailKursusPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";
import { CourseProvider } from "../providers/course.context";

export default function DetailKursus() {
  return (
    <>
      <div className="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar active={2} />
          <div class="col py-3">
            <AdminTab />
            <CourseProvider>
              <DetailKursusEdit />
            </CourseProvider>
          </div>
        </div>
      </div>
    </>
  );
}
