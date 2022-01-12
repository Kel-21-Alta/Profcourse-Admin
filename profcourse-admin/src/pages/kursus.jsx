import KursusPart from "../Components/Parts/kursusPart";
import AdminTab from "../Components/Usable/adminTab";
import Sidebar from "../Components/Usable/navbar";

export default function Kursus(props){
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <Sidebar/>
                <div class="col py-3">
                    <AdminTab/>
                    <KursusPart/>
                </div>
            </div>
       </div>
    );
}