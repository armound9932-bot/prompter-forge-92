import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarLockout from "./pages/CarLockout";
import KeyReplacement from "./pages/KeyReplacement";
import KeyProgramming from "./pages/KeyProgramming";
import IgnitionRepair from "./pages/IgnitionRepair";
import SmartKeyProgramming from "./pages/SmartKeyProgramming";
import SmartKeyBrandPage from "./pages/smart-key-programming/SmartKeyBrandPage";

const SMART_KEY_BRANDS = ["toyota", "honda", "ford", "chevrolet", "nissan", "kia", "hyundai"];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/car-lockout" element={<CarLockout />} />
      <Route path="/key-replacement" element={<KeyReplacement />} />
      <Route path="/key-programming" element={<KeyProgramming />} />
      <Route path="/ignition-repair" element={<IgnitionRepair />} />
      <Route path="/smart-key-programming" element={<SmartKeyProgramming />} />
      {SMART_KEY_BRANDS.map(brand => (
        <Route key={brand} path={`/smart-key-programming/${brand}`} element={<SmartKeyBrandPage brand={brand} />} />
      ))}
    </Routes>
  );
}

export default App;
