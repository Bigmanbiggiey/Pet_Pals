// App.jsx
// Links and Routing

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="booking"><Booking /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="gallery"><Gallery /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
  );
}
