import React from 'react'
import plusIcon from "../image/plusIcon.svg"
export default function FAQSection() {
    return (
    <section className="section double-top">
    <div className="container">
      <div className="_12-columns">
        <div className="column desktop-8 tablet-12">
          <div className="text-center">
            <div className="heading-wrapper">
              <h2 className="heading xl">Frequent questions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="_12-columns w-dyn-list">
        <div role="list" className="column desktop-8 tablet-12 w-dyn-items">
          <div role="listitem" className="faq-wrapper w-dyn-item">
            <div className="faq-item large scale-up">
              <div className="question">
                <div className="question-heading">
                What types of websites do you build?
                </div>
              
              </div>
              <div className="answer">
                <div className="faq-answer w-richtext">
                  <p>
                  We specialize in building various types of websites, including e-commerce sites, business portfolios, blogs, and more. Whatever your needs, we have the expertise to create a tailored solution for you.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="faq-item large scale-up">
              <div className="question">
                <div className="question-heading">
                How do you provide high value at such a low price 25k?
                </div>
              
              </div>
              <div className="answer">
                <div className="faq-answer w-richtext">
                  <p>
                  Our team is dedicated to maximizing efficiency and utilizing advanced technology to minimize costs, allowing us to offer competitive pricing without sacrificing quality.





                  </p>
                </div>
              </div>
              
            </div>
            <div className="faq-item large scale-up">
              <div className="question">
                <div className="question-heading">
                Do you offer any guarantees?
                </div>
              
              </div>
              <div className="answer">
                <div className="faq-answer w-richtext">
                  <p>
                  Yes, we offer a 100% money-back guarantee to ensure your satisfaction. If you're not completely happy with our service, we'll refund your investment, no questions asked. Your trust and confidence in our work are our top priorities.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="faq-item large scale-up">
              <div className="question">
                <div className="question-heading">
                Can you help with website maintenance after it's built?
                </div>
              
              </div>
              <div className="answer">
                <div className="faq-answer w-richtext">
                  <p>
                  Absolutely! We provide ongoing support and maintenance services to ensure your website stays updated, secure, and optimized for performance.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          {/* Other FAQ items */}
          {/* Add more <div> elements like above for additional FAQ items */}
        </div>
      </div>
    </div>
  </section>
);
}
