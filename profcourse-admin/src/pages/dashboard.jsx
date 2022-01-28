/** @format */

import DashboardPart from "../Components/Parts/dashboardPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function Dashboard(props) {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar active={1} />
        <div class="col py-3">
          <AdminTab />
          <DashboardPart />
        </div>
      </div>
    </div>
  );
}
