import React, { useState } from 'react';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import "./Maitreya.css";

const Budha = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="buddha-container">
        <img
          src={`${process.env.PUBLIC_URL}/buddha.jpg`}
          alt="Buddha"
          className="buddha-image"
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
    left: isSidebarOpen ? 'calc(20% - 50px)' : '8px',
    transform: isSidebarOpen ? 'translateX(-100%)' : 'none',
    transition: 'left 0.9s, transform 0.5s',
  }}
/>
    </div>
    <div className="Next_contianer" style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px', right: "20px" }}>    
    <Link to="/Lakshmi">
            <Button variant="contained" style={{ backgroundColor: "white", color: "red" }}>
              View Next
              <KeyboardArrowRightIcon />
            </Button>
    </Link>
        </div>
    </div>
  );
};

export default Budha;
