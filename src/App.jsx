import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dan-kolonay" element={<TeamMemberPage name="dan_kolonay" />} />
      <Route path="/dan-kolonay" element={<TeamMemberPage name="dan_kolonay" />} />
      <Route path="/dan-kolonay" element={<TeamMemberPage name="dan_kolonay" />} /> */}
    </Routes>
  );
}

export default App;