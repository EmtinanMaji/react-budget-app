import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Home';


function Index() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget-app" element={<App />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default Index;
