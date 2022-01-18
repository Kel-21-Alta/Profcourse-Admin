import { Routes, Route } from "react-router-dom";
import BuatPengguna from "./pages/buat-pengguna";
import BuatSpesialisasi from "./pages/buatSpesialisasi";
import DetailKursus from "./pages/detailKursus";
import Dashboard from "./pages/dashboard";
import DetailSpesialisasi from "./pages/detailSpesialisasi";
import Kursus from "./pages/kursus";
import Login from "./pages/login";
import LupaPassword from "./pages/lupa-password";
import Pengguna from "./pages/pengguna";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pengguna" element={<Pengguna />} />
      <Route path="/kursus" element={<Kursus />} />
      <Route path="/kursus/spesialisasi/:id" element={<DetailSpesialisasi />} />
      <Route path="/kursus/buat_spesialisasi" element={<BuatSpesialisasi />} />
      <Route path="/pengguna/buat" element={<BuatPengguna />} />
      <Route path="/lupa-password" element={<LupaPassword />} />
      <Route path="/kursus/:id" element={<DetailKursus />} />
    </Routes>
  );
}

export default App;
