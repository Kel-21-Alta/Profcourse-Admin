/** @format */

import PermintaanPart from "../Components/Parts/permintaanPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function Permintaan(props) {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar active={4} />
        <div class="col py-3">
          <AdminTab />
          <PermintaanPart />
        </div>
      </div>
    </div>
  );
}
