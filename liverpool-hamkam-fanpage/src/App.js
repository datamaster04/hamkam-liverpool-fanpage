import './style/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home'
import Kamper from './pages/Kamper'
import Nyheter from './pages/Nyheter'
import OmOss from './pages/OmOss'
import OvergangerOgRykter from './pages/OvergangerOgRykter'
import Førsteseier from './nyheter_pages/førsteseier'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"

function App() {
  return <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/'element={<Navigate to={"/home"} />} />

        <Route path="/kamper" element={<Kamper />} />
        <Route path="/nyheter" element={<Nyheter />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/overganger-og-rykter" element={<OvergangerOgRykter />} />
        <Route path="/førsteseier" element={<Førsteseier />} />
      </Routes>
  </BrowserRouter>
}

export default App;

