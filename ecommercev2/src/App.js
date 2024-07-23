import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
