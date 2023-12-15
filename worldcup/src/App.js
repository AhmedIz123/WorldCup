import Navbar from './components/navbar/Navbar';
import Logo from './images/Unity kick 1.png';
import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './components/pages/dashboard/Dashboard';
import StandingPage from './components/pages/standingPage/StandingPage';
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);
  const [isNavOpen, setIsNavOpen]= useState(true);
    useEffect(()=>{
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1100);
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    },[window.innerWidth]);
  return (
    <div className={`page-content ${window.innerWidth < 800?`block`:`inline`}`}>
      <div className={`sidebar ${window.innerWidth < 800?`block`:`inline`}`}>
        {window.innerWidth < 800 && (
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
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
