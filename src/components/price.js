import React from 'react'
import checkmark from "../image/checkmark.svg"
import logo from "../image/Logo.svg"

import "./hero.css"
export default function price() {
    return (
      <>
        <section className="section double-top">
          <div className="container">
            <div className="_12-columns align-top space-between">
              <div className="column desktop-5 mobile-12">
                <h2 className="heading xl">Pricing</h2>
                <p>
                Get Premium Quality at an Unbeatable Price
                </p>
              </div>
              <div className="column desktop-6 tablet-7 mobile-12">
                <div
                  data-current="Monthly"
                  data-easing="ease"
                  data-duration-in="0"
                  data-duration-out="0"
                  className="tabs right-align scale-up w-tabs"
                >
                  <div className="tabs-menu small w-tab-menu">
                    <a
                      data-w-tab="Monthly"
                      className="tab w-inline-block w-tab-link w--current"
                    >
                      <div>One stop solution</div>
                    </a>
                
                    
                  </div>
                  <div className="tabs-content w-tab-content">
                    <div data-w-tab="Monthly" className="w-tab-pane w--tab-active">
                      <div className="pricing-card">
                        <h3 className="heading m">Ultimate Plan</h3>
                        <div className="pricing-row">
                          <div className="price">₹25000</div>
                          <div className="pricing-small-text"></div>
                        </div>
                        <p className="paragraph s">
                        Our Ultimate Plan is 100% tailored to meet the needs of Indian business owners. Get everything you need to establish a strong online presence and grow your business.
                        </p>
                        <div className="checklist">
                          <div className="pricing-small-text">What's included</div>
                          <div className="checklist-item">
                            <img
                              alt=""
                              loading="lazy"
                              src={checkmark}
                              className="checkmark"
                            />
                            <p className="paragraph s">
                            Mobile Friendly Design
                            </p>
                          </div>
                          <div className="checklist-item">
                            <img
                              alt=""
                              loading="lazy"
                              src={checkmark}
                              className="checkmark"
                            />
                            <p className="paragraph s">
                            SEO Friendly Optimization
                            </p>
                          </div>     <div className="checklist-item">
                            <img
                              alt=""
                              loading="lazy"
                              src={checkmark}
                              className="checkmark"
                            />
                            <p className="paragraph s">
                            Up to 10 Pages
                            </p>
                          </div>     <div className="checklist-item">
                            <img
                              alt=""
                              loading="lazy"
                              src={checkmark}
                              className="checkmark"
                            />
                            <p className="paragraph s">
                            Unlimited Revisions
                            </p>
                          </div>     <div className="checklist-item">
                            <img
                              alt=""
                              loading="lazy"
                              src={checkmark}
                              className="checkmark"
                            />
                            <p className="paragraph s">
                            E-commerce Integration
                            </p>
                          </div>
                        </div>
                        <div className="button-wrapper pricing">
                          <a
                            href="tel:01169269986"
                            className="button secondary w-inline-block"
                          >
                            <div className="button-text secondary" >Get started</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Annually" className="w-tab-pane">
                      <div className="pricing-card">
                        <h3 className="heading m">Starter</h3>
                        <div className="pricing-row">
                          <div className="price">$32</div>
                          <div className="pricing-small-text">/month</div>
                        </div>
                        <p className="paragraph s">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Pretium orci penatibus sed donec consequat.
                        </p>
                        <div className="checklist">
                          <div className="pricing-small-text">What's included</div>
                          <div className="checklist-item">
                            <img
                              alt=""
                              loading="lazy"
                              src="images/635c92dce19fbd00a5fcb560_Checkmark.svg"
                              className="checkmark"
                            />
                            <p className="paragraph s">
                              Lorem ipsum dolor sit amet consectetur
                            </p>
                          </div>
                          <div className="checklist-item">
                        <img
                          alt=""
                          loading="lazy"
                          src="images/635c92dce19fbd00a5fcb560_Checkmark.svg"
                          className="checkmark"
                        />
                        <p className="paragraph s">Lorem ipsum dolor sit amet</p>
                      </div>
                        </div>
                        <div className="button-wrapper pricing">
                          <a
                            href="tel:01169269986"
                            className="button secondary w-inline-block"
                          >
                            <div className="button-text secondary" >Get started</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="compare" className="section">
      <div className="container">
        <div className="_12-columns">
          <div className="column desktop-9 tablet-12">
            <div className="compare-wrapper">
              <div className="compare-grid-row _2-column header-row">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78c9-8a8f78c5"
                  className="compare-info-wrapper header"
                ></div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78ca-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src="images/vp.png"
                    loading="lazy"
                    alt="Captivate logo"
                    className="compare-logo"
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78cc-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <p className="compare-label large">Others</p>
                </div>
              </div>
              <div className="compare-grid-row _2-column">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d0-8a8f78c5"
                  className="compare-info-wrapper"
                >
                  <p className="compare-subhead small">
                  Custom-built websites
                  </p>
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d3-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large"
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d5-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large"
                  />
              </div>
              </div>
              <div className="compare-grid-row _2-column no-background">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d0-8a8f78c5"
                  className="compare-info-wrapper"
                >
                  <p className="compare-subhead small">
                  High-value premium website at the same price
                  </p>
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d3-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large"
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d5-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large disabled"
                  />
              </div>
              </div>
              <div className="compare-grid-row _2-column">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d0-8a8f78c5"
                  className="compare-info-wrapper"
                >
                  <p className="compare-subhead small">
                  Guaranteed 7-day delivery	
                  </p>
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d3-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large"
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d5-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large disabled"
                  />
              </div>
              </div>
              <div className="compare-grid-row _2-column no-background">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d0-8a8f78c5"
                  className="compare-info-wrapper"
                >
                  <p className="compare-subhead small">
                  Unlimited revisions	
                  </p>
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d3-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large"
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d5-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large disabled"
                  />
              </div>
              </div>
              <div className="compare-grid-row _2-column">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d0-8a8f78c5"
                  className="compare-info-wrapper"
                >
                  <p className="compare-subhead small">
                  100% money-back guarantee	
                   </p>
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d3-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large "
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d5-8a8f78c5"
                  className="compare-checkmark-wrapper "
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large disabled"
                  />
              </div>
              </div>
              <div className="compare-grid-row _2-column no-background">
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d0-8a8f78c5"
                  className="compare-info-wrapper"
                >
                  <p className="compare-subhead small">
                  Personalized customer support	
                  </p>
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d3-8a8f78c5"
                  className="compare-checkmark-wrapper"
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large"
                  />
                </div>
                <div
                  id="w-node-e90c0e9b-ce2d-242b-140e-f23d8a8f78d5-8a8f78c5"
                  className="compare-checkmark-wrapper "
                >
                  <img
                    src={checkmark}
                    loading="lazy"
                    alt=""
                    className="checkmark large disabled"
                  />
              </div>
              </div>
              
              {/* Repeat the structure for other rows */}
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
      );
}
