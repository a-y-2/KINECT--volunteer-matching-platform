// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/Volunteer/Volunteer';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const Organization = () => <h2>Organization Page</h2>;
const About = () => <h2>About Us Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Volunteer />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => <h2>Home Page</h2>;

export default App;
