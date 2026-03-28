import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarLockout from "./pages/CarLockout";
import KeyReplacement from "./pages/KeyReplacement";
import KeyProgramming from "./pages/KeyProgramming";
import IgnitionRepair from "./pages/IgnitionRepair";
import SmartKeyProgramming from "./pages/SmartKeyProgramming";
import SmartKeyBrandPage from "./pages/smart-key-programming/SmartKeyBrandPage";
import SmartKeyModelPage from "./pages/smart-key-programming/SmartKeyModelPage";
import ToyotaCamryPage from "./pages/smart-key-programming/ToyotaCamryPage";
import ToyotaCorollaPage from "./pages/smart-key-programming/ToyotaCorollaPage";
import ToyotaRav4Page from "./pages/smart-key-programming/ToyotaRav4Page";
import ToyotaHighlanderPage from "./pages/smart-key-programming/ToyotaHighlanderPage";
import ToyotaTacomaPage from "./pages/smart-key-programming/ToyotaTacomaPage";
import ToyotaPriusPage from "./pages/smart-key-programming/ToyotaPriusPage";
import ToyotaSiennaPage from "./pages/smart-key-programming/ToyotaSiennaPage";
import HondaCivicPage from "./pages/smart-key-programming/HondaCivicPage";
import HondaAccordPage from "./pages/smart-key-programming/HondaAccordPage";
import HondaCrvPage from "./pages/smart-key-programming/HondaCrvPage";
import HondaPilotPage from "./pages/smart-key-programming/HondaPilotPage";

const SMART_KEY_BRANDS = ["toyota", "honda", "ford", "chevrolet", "nissan", "kia", "hyundai"];

const SMART_KEY_MODELS: Record<string, string[]> = {
  toyota: [],
  honda: [],
  ford: ["f-150", "escape", "explorer"],
  chevrolet: ["malibu", "equinox", "silverado"],
  nissan: ["altima", "sentra", "rogue"],
  kia: ["optima", "forte", "sorento"],
  hyundai: ["elantra", "sonata", "tucson"],
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/car-lockout" element={<CarLockout />} />
      <Route path="/key-replacement" element={<KeyReplacement />} />
      <Route path="/key-programming" element={<KeyProgramming />} />
      <Route path="/ignition-repair" element={<IgnitionRepair />} />
      <Route path="/smart-key-programming" element={<SmartKeyProgramming />} />
      <Route path="/smart-key-programming/toyota/camry" element={<ToyotaCamryPage />} />
      <Route path="/smart-key-programming/toyota/corolla" element={<ToyotaCorollaPage />} />
      <Route path="/smart-key-programming/toyota/rav4" element={<ToyotaRav4Page />} />
      <Route path="/smart-key-programming/toyota/highlander" element={<ToyotaHighlanderPage />} />
      <Route path="/smart-key-programming/toyota/tacoma" element={<ToyotaTacomaPage />} />
      <Route path="/smart-key-programming/toyota/prius" element={<ToyotaPriusPage />} />
      <Route path="/smart-key-programming/toyota/sienna" element={<ToyotaSiennaPage />} />
      <Route path="/smart-key-programming/honda/civic" element={<HondaCivicPage />} />
      <Route path="/smart-key-programming/honda/accord" element={<HondaAccordPage />} />
      <Route path="/smart-key-programming/honda/cr-v" element={<HondaCrvPage />} />
      <Route path="/smart-key-programming/honda/pilot" element={<HondaPilotPage />} />
      <Route path="/smart-key-programming/honda/odyssey" element={<HondaOdysseyPage />} />
      {SMART_KEY_BRANDS.map(brand => (
        <Route key={brand} path={`/smart-key-programming/${brand}`} element={<SmartKeyBrandPage brand={brand} />} />
      ))}
      {Object.entries(SMART_KEY_MODELS).map(([brand, models]) =>
        models.map(model => (
          <Route key={`${brand}/${model}`} path={`/smart-key-programming/${brand}/${model}`} element={<SmartKeyModelPage brandSlug={brand} modelSlug={model} />} />
        ))
      )}
    </Routes>
  );
}

export default App;
