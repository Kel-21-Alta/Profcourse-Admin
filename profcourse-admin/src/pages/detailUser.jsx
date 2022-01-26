/** @format */

import DetailUserPart from "../Components/Parts/detailUserPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function DetailPengguna(props) {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar active={3} />
        <div class="col py-3">
          <AdminTab />
          <DetailUserPart />
        </div>
      </div>
    </div>
  );
}
