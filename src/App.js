import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/home/Hero';
import Specials from './components/home/Specials';
import Testimonials from './components/home/Testimonials';
import About from './components/home/About';
import Footer from './components/home/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
