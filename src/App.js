import React, { useState } from 'react';
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Sidebar from './pages/Sidebar';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className={`buddha-container ${isSidebarOpen ? 'open' : ''}`}>
        <img
          src={`${process.env.PUBLIC_URL}/buddha.jpg`}
          alt="Buddha"
          className={`buddha-image ${isSidebarOpen ? 'open' : ''}`}
        />
      </div>
      <div className={`sidebar-button-wrapper ${isSidebarOpen ? 'open' : ''}`} style={{ zIndex: 999999 }}>
      <Button
  variant="contained"
  onClick={toggleSidebar}
  startIcon={isSidebarOpen ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
  style={{
    minWidth: '0',
    width: '35px',
    minwidth: '25px',
    height: '25px',
    color: "red",
    backgroundColor: "white",
    borderRadius: '20%',
    padding: '0',
    position: 'absolute',
    left: isSidebarOpen ? 'calc(45% - 50px)' : '8px',
    transform: isSidebarOpen ? 'translateX(-100%)' : 'none',
    transition: 'left 0.9s, transform 0.5s',
  }}
/>
      </div>
    </div>
  );
};

export default App;
