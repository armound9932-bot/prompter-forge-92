import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarLockout from "./pages/CarLockout";
import KeyReplacement from "./pages/KeyReplacement";
import KeyProgramming from "./pages/KeyProgramming";
import IgnitionRepair from "./pages/IgnitionRepair";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/car-lockout" element={<CarLockout />} />
      <Route path="/key-replacement" element={<KeyReplacement />} />
      <Route path="/key-programming" element={<KeyProgramming />} />
      <Route path="/ignition-repair" element={<IgnitionRepair />} />
    </Routes>
  );
}

export default App;
