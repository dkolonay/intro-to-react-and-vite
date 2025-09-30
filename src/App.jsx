import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeniaCasimiro from './pages/DeniaCasimiro';
import VitaliyDmukhovskyy from './pages/VitaliyDmukhovskyy';
import DanKolonay from './pages/DanKolonay';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vitaliy-dmukhovskyy" element={<VitaliyDmukhovskyy />} />
      <Route path="/denia-casimiro" element={<DeniaCasimiro/>} />
      <Route path="/dan-kolonay" element={<DanKolonay />} />
    </Routes>
  );
}

export default App;