// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import Models from './pages/models';
import AddModel from './pages/AddModel';
import LoginPage from './pages/Login'
function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/ >} />
        <Route path="/home" element={<HomePage/ >} />
        <Route path="/about" element={<About/ >} />
        <Route path="/models" element={<Models/ >} />
        <Route path="/AddModels" element={<AddModel/ >} />
        <Route path="/login" element={<LoginPage/ >} />        
      </Routes>
    </div>
  );
}

export default App;
