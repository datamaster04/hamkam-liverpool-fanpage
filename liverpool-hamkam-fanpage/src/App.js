import './style/App.css';
import React from 'react';
import { BrowseRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Kamper from './pages/Kamper'
import Nyheter from './pages/Nyheter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/sit/js/bootstrap.bundle'
import Header from "./components/Header"

function App() {
  return <BrowseRouter>
    <Header />
      <Routes>
        <Route path="/Home" element={<Pages.Home />} />

        <Route path="/kamper" element={<Pages.Kamper />} />
        <Route path="/nyheter" element={<Pages.Nyheter />} />
        <Route path="/om-oss" element={<Pages.OmOss />} />
        <Route path="/overganger-og-rykter" element={<Pages.OvergangerOgRykter />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
  </BrowseRouter>
}

export default App;
