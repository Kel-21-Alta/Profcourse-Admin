import { Routes, Route } from "react-router-dom";
import BuatPengguna from "./pages/buat-pengguna";
import CreateKursus from "./pages/CreateKursus";
import Dashboard from "./pages/dashboard";
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
      <Route path="/pengguna/buat" element={<BuatPengguna />} />
      <Route path="/lupa-password" element={<LupaPassword />} />
      <Route path="/buat-kursus" element={<CreateKursus />} />
    </Routes>
  );
}

export default App;
