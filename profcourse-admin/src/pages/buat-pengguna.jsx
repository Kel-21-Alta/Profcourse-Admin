/** @format */

import BuatPenggunaPart from "../Components/Parts/buatPenggunaPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function BuatPengguna() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar active={3} />
        <div class="col py-3">
          <AdminTab />
          <BuatPenggunaPart />
        </div>
      </div>
    </div>
  );
}
