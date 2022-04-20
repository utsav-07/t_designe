
import './App.css';
import AboutUs from './Pages/AboutUs';
import Features from './Pages/Features';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Testimonial from './Pages/Testimonial';

function App() {
  return (
    <div className='h-full w-full bg-gray-200'>

      <div >
        <Navbar />
        <Features/>
        <AboutUs/>
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
