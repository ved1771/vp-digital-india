import React from 'react'
import "./hero.css"
export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="section background">
          <div className="container">
            <div className="w-dyn-list">
              <div role="list" className="_12-columns w-dyn-items">
                <div
                  role="listitem"
                  className="column desktop-10 tablet-12 fade-in w-dyn-item"
                >
                  
                  <div className="testimonial">
                    “With just 25k, VP Digital delivered immense value through a high-quality website for my kurtis business. Their e-commerce platform tripled my revenue, setting me apart in the competitive Indian market.”
                  </div>
                  <div className="testimonial-author">Himanshu Jain</div>
                  <div className="testimonial-author">,�&nbsp;</div>
                  <div className="testimonial-author">small business owner</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
