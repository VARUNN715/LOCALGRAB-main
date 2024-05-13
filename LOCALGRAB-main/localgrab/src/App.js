import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Sales from './components/Sales';
import Login from './components/Login';
import Payment from './components/Payment';
import ComingSoon from './components/ComingSoon';
import GroceryStores from './components/GroceryStores';
import PharmacyStores from './components/PharmacyStores'
import ClothingStores from './components/ClothingStores'
import GroceryForm from './components/GroceryForm';
import PharmacyForm from './components/PharmacyForm';
import ClothingForm from './components/ClothingForm';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/groceryStores" element={<GroceryStores/>}/>
        <Route path="/pharmacyStores" element={<PharmacyStores/>}/>
        <Route path="/clothingStores" element={<ClothingStores/>}/>
        <Route path="/groceryForm" element={<GroceryForm/>}/>
        <Route path="/pharmacyForm" element={<PharmacyForm/>}/>
        <Route path="/clothingForm" element={<ClothingForm/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;