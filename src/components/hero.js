import React from "react";
import "./hero.css";
import officeMeetingImage from "../image/ved.webp";
import officeMeetingImageOne from "../image/635c9bf8f07e633b3b9bb211_Office Meeting Lg-p-500.webp";
import officeMeetingImageTwo from "../image/635c9bf8f07e633b3b9bb211_Office Meeting Lg-p-800.webp";
import officeMeetingImageThree from "../image/635c9bf8f07e633b3b9bb211_Office Meeting Lg-p-1080.webp";
import officeMeetingImageFour from "../image/635c9bf8f07e633b3b9bb211_Office Meeting Lg-p-1600.webp";
import officeMeetingImageFive from "../image/635c9bf8f07e633b3b9bb211_Office Meeting Lg-p-2000.webp";
export default function hero() {
  return (
    <>
      {" "}
      <div
        data-animation="default"
        data-collapse="small"
        data-duration="0"
        data-easing="ease-out-quart"
        data-easing2="ease-in-quart"
        data-doc-height="1"
        role="banner"
        class="nav-bar w-nav"
      >
        <div class="container wide">
          <div class="nav-wrapper center">
            <a href="/" class="brand w-nav-brand">
              <img
                src="images/vp.png"
                loading="lazy"
                alt="Captivate logo"
                class="logo-image"
              />
            </a>
          </div>
        </div>
      </div>
      <section className="section image-background">
        <div className="image-background-text">
          <div className="container">
            <div className="_12-columns">
              <div className="column desktop-8 tablet-12">
                <div className="text-center scale-up">
                  <h1 className="heading xl">
                  Boost Your Business Online
                  </h1>
                  <p className="paragraph">
                  Get a Professional, Custom-Built Website in Just 7 Days <br/> 100% Risk-Free, Money-Back Guarantee!
                  </p>
                  <div className="button-wrapper center">
                    <a href="tel:01169269986" className="button w-inline-block">
                      <div className="button-text" >Get started</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={officeMeetingImage}
          loading="lazy"
          sizes="100vw"
          srcSet="
                /images/bg-500.webp 500w,
                /images/bg-800.webp 800w,
                /images/bg-1080.webp 1080w,
                /images/bg-1600.webp 1600w,
               /images/bg-2000.webp 2000w,
               /images/bg.webp 2000w,
              "
          alt="Business meeting during night time"
          className="image-background"
        />
        <div className="image-overlay"></div>
      </section>
    </>
  );
}
