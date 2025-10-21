import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './fonts.css';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import MaintenancePage from './pages/MaintenancePage';

// MAINTENANCE MODE TOGGLE
// Set this to true to enable maintenance mode, false to disable
const MAINTENANCE_MODE = true;

function App() {
  useEffect(() => {
    document.title = "Accountistry - Professional Accounting Services";
  }, []);

  // If maintenance mode is enabled, show only the maintenance page
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
