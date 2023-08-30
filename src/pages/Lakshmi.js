import React, { useState } from "react";
import "./Lakshmi.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SlideUpSidebar from "./SlideUpSideBar";
import './Maitreya.css';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Lakshmi = () => {
  const [isMoving, setIsMoving] = useState(false);

  const toggleAnimation = () => {
    setIsMoving(!isMoving)
  };


  return (
    <div> 
      <SlideUpSidebar/>
      <div className="lakshmi-container">
        <img
          src={`${process.env.PUBLIC_URL}/Lakshmi.png`}
          alt="Buddha"
          style={{ width: "10rem", zIndex:"0" }}
        />
      </div>
      <div
        className={`Lakshmi_contianer ${isMoving ? "move-animation" : ""}`}
        style={{ position: "absolute", top: 20, left: 20 }}
      >
        <Link to="/">
          <Button
            variant="contained"
            className="back_budha_btn"
            onClick={toggleAnimation}
          >
            <KeyboardArrowLeftIcon />
            View Previous
          </Button>
        </Link>
      </div>
     
    </div>
  );
};

export default Lakshmi;
