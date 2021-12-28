import {
    Routes,
    Route
  } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Pengguna from "./pages/pengguna";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/pengguna" element={<Pengguna/>}/>
    </Routes>
  );
}

export default App;
