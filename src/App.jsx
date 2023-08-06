import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import { Specialist, Engineer, Pilot, Commander } from './pages/Crew';
import { Moon, Mars, Europa, Titan } from './pages/Destination';
import { Capsule, Spaceport, Vehicle } from "./pages/Technology";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/space-tourism_fixed' element={<Home />} />
          <Route path='mark' element={<Specialist />} />
          <Route path='douglas' element={<Commander />} />
          <Route path='anousheh' element={<Engineer />} />
          <Route path='victor' element={<Pilot />} />
          <Route path='moon' element={<Moon />} />
          <Route path='mars' element={<Mars />} />
          <Route path='europa' element={<Europa />} />
          <Route path='titan' element={<Titan />} />
          <Route path='space-capsule' element={<Capsule />} />
          <Route path='spaceport' element={<Spaceport />} />
          <Route path='vehicle' element={<Vehicle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
