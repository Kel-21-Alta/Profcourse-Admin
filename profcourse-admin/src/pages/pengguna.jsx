/** @format */

import PenggunaPart from "../Components/Parts/penggunaPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function Pengguna(props) {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar active={3} />
        <div class="col py-3">
          <AdminTab />
          <PenggunaPart />
        </div>
      </div>
    </div>
  );
}
