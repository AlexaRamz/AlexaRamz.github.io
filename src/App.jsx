import './App.css'

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Dawncore from './pages/Dawncore.jsx';
import BuildToSpace from './pages/BuildToSpace.jsx';
import CoffeesBrew from './pages/CoffeesBrew.jsx';
import SciFiPuzzle from './pages/SciFiPuzzle.jsx';
import ShroudedMoon from './pages/ShoudedMoon.jsx';
import WildLasers from './pages/WildLasers.jsx';
import ScrollToTop from './components/ScrollToTop.js';

function App()
{
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/dawncore" element={<Dawncore />} />
        <Route path="/projects/build_to_space" element={<BuildToSpace />} />
        <Route path="/projects/coffees_brew" element={<CoffeesBrew />} />
        <Route path="/projects/scifi_puzzle" element={<SciFiPuzzle />} />
        <Route path="/projects/shrouded_moon" element={<ShroudedMoon />} />
        <Route path="/projects/wild_lasers" element={<WildLasers />} />
      </Routes>
    </>
  )
}

export default App
