import Navbar from './components/navbar/Navbar';
import Logo from './images/Unity kick 1.png';
import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './components/pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1400);
  const [isNavOpen, setIsNavOpen]= useState(false);
    useEffect(()=>{
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1400);
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    },[window.innerWidth]);
  return (
    <div className={`page-content ${isSmallScreen?`block`:`inline`}`}>
      <div className={`sidebar ${isSmallScreen?`block`:`inline`}`}>
        {isSmallScreen && (
          <div id='burger' className={`logo-menu`}>
            <i id='burger' class="fa-solid fa-bars fa-xl" style={{color: "#636363;"}} onClick={()=>{setIsNavOpen(!isNavOpen)}}></i>
            <div className="logo">
              <img src={Logo} alt='Logo'/>
              <h2>Unity Kick</h2>
            </div>
          </div>
        )}
        <Navbar isSmallScreen={isSmallScreen} isNavOpen={isNavOpen} setNavOpen={setIsNavOpen}/>
      </div>
      <div className='right-side'>
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
