import React, { useState } from "react";
import Draggable from "react-draggable";
import { Button, Typography, IconButton, Box, Collapse } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./SlideUpSidebar.css";

const SlideUpSideBar = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(0);

  const counts = {
    love: 100,
    share: 50,
    view: 200,
  };

  const MIN_HEIGHT = 230;
  const MAX_HEIGHT = -3;

  const handleReadMoreClick = (event) => {
    event.stopPropagation();
    setShowDescription(!showDescription);
  };

  const handleDrag = (_,{ deltaY }) => {
    // Ensure sliderPosition doesn't go beyond bounds
    const newPosition = Math.max(
      MAX_HEIGHT,Math.min(MIN_HEIGHT, sliderPosition - deltaY)
      
    );
    setSliderPosition(!newPosition);
  };

  return (
    <Draggable
      axis="y"
      position={{ x: 0, y: sliderPosition}}
      bounds={{ top: MAX_HEIGHT, bottom: MIN_HEIGHT }}
      onDrag={handleDrag}
      className="slider-handle"
    >
      <div className="draggable-slider">
        <div
          className= "downbar-content">
          <div className="downbar-header">
            <Typography variant="h6">
             MAHA lAKSHMI
            </Typography>
          </div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ width: "150px" }}
            mb={1}
          >
            {Object.keys(counts).map((key) => (
              <div key={key} className="count-container">
                <IconButton
                  style={{
                    color: "black",
                    backgroundColor: "#c7c7c7",
                    width: "24px",
                    height: "24px",
                    marginRight: "8px",
                  }}
                >
                  {key === "love" && <FavoriteBorderIcon />}
                  {key === "share" && <ShareOutlinedIcon />}
                  {key === "view" && <VisibilityOutlinedIcon />}
                </IconButton>
                <Typography variant="body2">{counts[key]}</Typography>
              </div>
            ))}
          </Box>
          {/* Additional Info */}
          <div className="additional-info">
            <div>
              <Typography className="title" variant="subtitle2">
                Dynasty: Ahichchhatra
              </Typography>
              <Typography className="title" variant="subtitle2">
                Period: 200 CE
              </Typography>
              <Typography className="title" variant="subtitle2">
                Material: Sandstone
              </Typography>
              <Typography className="title" variant="subtitle2">
                Location: National Museum
              </Typography>
            </div>
            {/* Collapse for description */}
            <Collapse
              in={sliderPosition === MAX_HEIGHT}
              collapsedSize={250}
              timeout="auto"
            >
              <Typography className="description" variant="subtitle2">
                Description:
              </Typography>
          <Collapse in={showDescription} collapsedSize={50}>
            <Typography variant="body1" className="dis_details">
              Maitreya, also known as "Metteyya" in Pali and "Maitreya" in Sanskrit, is a significant figure in Buddhism and is considered the future Buddha. According to Buddhist tradition, Maitreya currently resides in the Tushita heaven as a bodhisattva, which is a being who has attained a high level of spiritual realization but chooses to delay their own enlightenment to assist others in their spiritual journey. The concept of Maitreya as a future Buddha is found in various Buddhist scriptures and sutras, including the Digha Nikaya, which is one of the collections of Buddhist texts known as the "Long Discourses" or "Long Sayings." In these texts, it is mentioned that Maitreya will succeed the current Buddha, Siddhartha Gautama (also known as Shakyamuni Buddha), as the next enlightened teacher of humanity. According to the Buddhist tradition, there are seven historical Buddhas who have already appeared in the world before Siddhartha Gautama, and Maitreya is regarded as the eighth and final Buddha of this era The Digha Nikaya also specifies that Maitreya Buddha will be born in Ketumati, a city in present-day Varanasi, Uttar Pradesh, India. When the time is right, Maitreya will descend from the Tushita heaven to be reborn on Earth and begin his final life as a human being. During this time, Maitreya will teach the Dharma (the teachings of Buddhism) and lead countless beings toward enlightenment. In Buddhist art and iconography, Maitreya is often depicted as a bodhisattva wearing ornate jewelry, including earrings, wristlets, necklaces, and an amulet. This symbolism represents his position as a bodhisattva, someone who has acquired great merit and wisdom through countless lifetimes and has chosen to remain in the cycle of rebirth to help all beings achieve liberation from suffering. The idea of Maitreya as the future Buddha serves as a source of hope and inspiration for Buddhists, as it signifies the continuation of the Buddha's teachings and the potential for enlightenment for all beings in the future. However, it is essential to note that beliefs and interpretations about Maitreya may vary across different Buddhist traditions and cultures.
            </Typography>
          </Collapse>
              {/* Read More/Less Button */}
            <Button
              variant="outlined"
              endIcon={showDescription ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon /> }
              onClick={handleReadMoreClick}
              style={{
                fontSize: "12px",
                textTransform: "none",
                marginBottom: "8px",
                color: "#914900",
              }}
            >
              {showDescription ? "Read Less" : "Read More"}
            </Button>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  variant="contained"
                  style={{
                    textTransform: "none",
                    color: "white",
                    backgroundColor: "#914900",
                  }}
                >
                  ADD TO COLLECTIONS
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    textTransform: "none",
                    color: "#914900",
                    borderColor: "#914900",
                  }}
                >
                  SOUVENIR
                </Button>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default SlideUpSideBar;
