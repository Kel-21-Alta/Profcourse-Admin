/** @format */

import EditQuizPart from "../Components/Parts/editQuizPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function QuizEdit() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
        <div class="col py-3">
          <AdminTab />
          <EditQuizPart />
        </div>
      </div>
    </div>
  );
}
