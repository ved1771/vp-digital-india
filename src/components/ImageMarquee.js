import React, { useEffect, useState } from 'react';
import pic1 from "../image/crowd.png"
import pic2 from "../image/14.png"
import pic3 from "../image/crowd3.png"
import pic4 from "../image/crowd2.png"
import pic5 from "../image/crowd4.png"
import pic6 from "../image/crowd5.png"
import pic7 from "../image/crowd6.png"
import "./ImageMarquee.css"
import { gsap } from 'gsap'; // Import GSAP for animations

export default function ImageMarquee() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Calculate scroll progress
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / maxScroll) * 60;
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Perform animations based on scroll progress
  useEffect(() => {
    // Calculate animation values based on scroll progress
    const animationValue = scrollProgress * 0.2; // Example value, adjust as needed

    // Use GSAP to animate image positions
    gsap.to('.image-marquee-row.row-1', { x: -animationValue + '%', duration: 0.1 });
    gsap.to('.image-marquee-row.row-2', { x: animationValue + '%', duration: 0.1 });
  }, [scrollProgress]);

    return (
        <div  className="image-marquee-wrapper image-gap">
          <div className="image-marquee-row row-1" >
            <div className="marquee-image-wrapper">
              <img
                src={pic6}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
               
                alt="Woman typing on laptop"
                className="marquee-image"
              />
            </div>
            <div className="marquee-image-wrapper">
              <img
                src={pic1}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
               
                alt="Captivate presentation software"
                className="marquee-image"
              />
            </div>
            <div className="marquee-image-wrapper">
              <img
                src={pic2}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
               
                alt="Woman in cafe"
                className="marquee-image"
              />
            </div>
            <div className="marquee-image-wrapper">
              <img
                src={pic3}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
               
                alt="Captivate presentation software"
                className="marquee-image"
              />
            </div>
          </div>
          <div className="image-marquee-row row-2" >
            <div className="marquee-image-wrapper">
              <img
                src={pic7}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
             
                alt="Captivate presentation software"
                className="marquee-image"
              />
            </div>
            <div className="marquee-image-wrapper">
              <img
                src={pic4}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
               
                alt="Group of people at business meeting"
                className="marquee-image"
              />
            </div>
            <div className="marquee-image-wrapper">
              <img
                src={pic5}
                loading="lazy"
                sizes="(max-width: 767px) 50vw, 36vw"
              
                alt="Captivate presentation software easing"
                className="marquee-image"
              />
            </div>
          </div>
        </div>
      );
}

