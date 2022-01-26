/** @format */
import { Route, Routes } from "react-router-dom";
import LoadingNormal from "./assets/loading";
import BuatPengguna from "./pages/buat-pengguna";
import BuatSpesialisasi from "./pages/buatSpesialisasi";
import Dashboard from "./pages/dashboard";
import DetailKursus from "./pages/detailKursus";
import DetailSpesialisasi from "./pages/detailSpesialisasi";
import DetailPengguna from "./pages/detailUser";
import QuizEdit from "./pages/editQuiz";
import Kursus from "./pages/kursus";
import Login from "./pages/login";
import LupaPassword from "./pages/lupa-password";
import Pengguna from "./pages/pengguna";
import Permintaan from "./pages/permintaan";
import { useAuth } from "./providers/auth.context";
import { storage } from "./firebase";

//message variables

function App() {
  const auth = useAuth();

  if (auth.isLoading === true) {
    return (
      <div className="d-flex justify-content-center border vh-100 align-items-center">
        <LoadingNormal></LoadingNormal>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pengguna" element={<Pengguna />} />
      <Route path="/pengguna/:user_id" element={<DetailPengguna />} />
      <Route path="/kursus" element={<Kursus />} />
      <Route path="/permintaan" element={<Permintaan />} />
      <Route path="/kursus/spesialisasi/:id" element={<DetailSpesialisasi />} />
      <Route path="/kursus/buat_spesialisasi" element={<BuatSpesialisasi />} />
      <Route path="/pengguna/buat" element={<BuatPengguna />} />
      <Route path="/lupa-password" element={<LupaPassword />} />
      <Route path="/kursus/:id" element={<DetailKursus />} />
      <Route path="/kursus/:id/:modul_id/quiz" element={<QuizEdit />} />
    </Routes>
  );
}

export default App;
