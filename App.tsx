
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Adventures from './pages/Adventures';
import Bags from './pages/Bags';
import MainCamp from './pages/MainCamp';
import Activities from './pages/Activities';
import Products from './pages/Products';
import Rentals from './pages/Rentals';
import Discover from './pages/Discover';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen text-brand-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/main-camp" element={<MainCamp />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/products" element={<Products />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
