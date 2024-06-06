import React, { useEffect, useState } from "react";
import Hero from "./components/hero";
import Headline from "./components/Headline";
import TimeLine from "./components/timeLine";
import Price from "./components/price";
import Cta from "./components/cta";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ImageMarquee from "./components/ImageMarquee";
import ExitPopup from "./components/ExitPopup";
import "./App.css";
export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseLeave = (event) => {
    // Check if the mouse is leaving the viewport
    if (
      event.clientY <= 0 ||
      event.clientX <= 0 ||
      event.clientX >= window.innerWidth ||
      event.clientY >= window.innerHeight
    ) {
      // Show the popup
      setShowPopup(true);
    }
  };

  // Function to hide the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      {/* <Headline/> */}
      <Hero />
      <TimeLine />
      <ImageMarquee />
      <TestimonialsSection />

      <Price />
      <Cta />
      <FAQSection />
      {showPopup && (<></>
        // <div className="popup">
        //   <div className="popup-inner">
        //     <h2>Are you sure you want to leave?</h2>
        //     <p>Your changes may not be saved.</p>
        //     <button onClick={handleClosePopup}>Stay</button>
        //     {/* You can customize the popup design and contents */}
        //   </div>
        // </div>
      )}
    </div>
  );
}
