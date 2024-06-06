import React, { useRef, useEffect, useState } from "react";
import Confetti from "react-confetti";
import sound from "../assets/celebration-sound.mp3";
import "../styles/tailwind.css";
import lineBg from "../image/linebg.svg";
import "./timeLine.css";
export default function TimeLine() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  const targetDivRef = useRef(null);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1900 && window.scrollY < 2200) {
        handleShowConfetti();

        console.log(
          " window.innerHeight=> ",
          window.innerHeight,
          "window.scrollY => ",
          window.scrollY,
          "document.body.offsetHeight => ",
          document.body.offsetHeight
        );
      }
      const bottomOfTimeline =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (bottomOfTimeline) {
        handleShowConfetti();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowConfetti = () => {
    setShowConfetti(true);
  };
  const blastConfetti = () => {
    const pieces = [];
    for (let i = 0; i < 200; i++) {
      pieces.push({
        x: centerX,
        y: centerY,
        r: Math.random() * 360,
        d: Math.random() * 200 + 100, // distance from center
        color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      });
    }
    return pieces;
  };



  return (
    <>
      {/* ========Work flow timeline ==================== */}
      <img
        src={lineBg}
        loading="lazy"
        alt=""
        className="line-background grid"
      />
      <div class="line-overlay grid"></div>
      <img
        src={lineBg}
        loading="lazy"
        alt=""
        className="lineTwo-background grid"
      />
      <div class="lineTwo-overlay grid"></div>
      <h1 className="timeline-header">How We DeliverYour Project </h1>

      <div
        className="relative mt-5 rounded-lg py-4 px-2 text-zinc-200"
        style={{ marginTop: "100px" }}
      >
        <div className="absolute top-0 left-1/2 -ml-[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
          <div className="sticky top-1/2">
            <div className="relative h-4 w-4">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-cyan-700 opacity-75"></div>
              <div className="relative h-4 w-4 rounded-full bg-teal-500"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4
              className="my-4 rounded-lg p-2 text-2xl"
              style={{ backgroundColor: "#11252b", color: "#ffffff" }}
            >
              Requirement Understanding
            </h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Initial Consultation:</div>
            <div className="text-zinc-400">Online meeting to discuss needs.</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Project Scope:</div>
            <div className="text-zinc-400">Define scope and objectives.</div>
          </div>
          <div>
            <h4
              className="my-4 rounded-lg p-2 text-2xl"
              style={{ backgroundColor: "#11252b", color: "#ffffff" }}
            >
              Information Gathering
            </h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Content Collection:</div>
            <div className="text-zinc-400">Gather text, images, etc.</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Design Preferences:</div>
            <div className="text-zinc-400">Share examples and preferences.</div>
          </div>

          <div>
            <h4
              className="my-4 rounded-lg p-2 text-2xl"
              style={{ backgroundColor: "#11252b", color: "#ffffff" }}
            >
              Development & Implementation
            </h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Design & Development:</div>
            <div className="text-zinc-400">Create mockups, build site.</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Testing:</div>
            <div className="text-zinc-400">Test functionality and fix issues.</div>
          </div>

          <div>
            <h4
              className="my-4 rounded-lg p-2 text-2xl"
              style={{ backgroundColor: "#11252b", color: "#ffffff" }}
            >
            Final Review & Launch
            </h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Client Review:</div>
            <div className="text-zinc-400">Review and provide feedback.</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Launch:</div>
            <div className="text-zinc-400">Go live with 100% satisfaction.</div>
          </div>

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 999,
            }}
          >
            {showConfetti && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                gravity={0.6}
                numberOfPieces={2000}
                initialVelocityX={5}
                initialVelocityY={7}
                confettiSource={{
                  x: 0,
                  y: 0,
                  w: window.innerWidth,
                  h: window.innerHeight,
                }}
              />
            )}
          </div>
        </div>
      </div>

      <section id="pricing" class="section image-background short">
      <div class="image-background-text">
        <div class="container">
          <div class="_12-columns">
            <div class="column desktop-5 tablet-8 mobile-12">
              <div class="pricing-card center scale-up">
                <h3 class="heading m">7 Day Delivry </h3>
                <div class="pricing-row center">
                  <div class="price">0 Risk</div>
                  <div class="pricing-small-text">/Project</div>
                </div>
                <p class="paragraph s">
                Enjoy a risk-free experience with our <br/> 100% money-back guarantee.
                </p>
                <div class="spacer"></div>
                <div class="button-wrapper pricing">
                  <a href="tel:01169269986" class="button secondary w-inline-block"
                    ><div class="button-text secondary" >
                      Get started today
                    </div></a
                  >
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="images/635d0c1496e6ef698c58b2f4_Grid%20Background.svg"
        loading="lazy"
        alt=""
        class="image-background grid"
      />
      <div class="image-overlay grid"></div>
    </section>  
    </>
  );
}
