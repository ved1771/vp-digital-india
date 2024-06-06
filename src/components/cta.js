import React from 'react'
import "./hero.css"
import lineBg from "../image/linebg.svg"
export default function cta() {
    return (
        <section id="cta" className="section image-background short">
          <div className="image-background-text">
            <div className="container">
              <div className="_12-columns">
                <div className="column desktop-8 tablet-12">
                  <div className="text-center fade-in">
                    <h2 className="heading xl">
                    Ready to elevate your online presence?
                    </h2>
                    <p>
                    Unleash the power of a captivating website to showcase your business. Let's create an online platform that captivates your audience and drives growth.
                    </p>
                    <div className="button-wrapper center">
                      <a href="tel:01169269986" className="button w-inline-block">
                        <div className="button-text">Get started</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={lineBg}
            loading="lazy"
            alt=""
            className="image-background grid"
          />
          <div className="image-overlay grid"></div>
        </section>
      );
}
