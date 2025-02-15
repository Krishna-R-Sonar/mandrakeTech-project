import React from 'react'
import { Parallax } from 'react-parallax'

const TestimonialsSection = () => {
  return (
    <Parallax
      bgImage="https://telosa.review/wp-content/uploads/2019/05/1-1.jpg?id=1043.webp"
      strength={300}
      bgImageStyle={{ objectFit: 'cover' }}
    >
      <div className="py-5 text-white" style={{ minHeight: '400px' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Heading */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h6
                className="text-uppercase mb-2"
                style={{ letterSpacing: '1px', fontWeight: 500 }}
              >
                Testimonials
              </h6>
              <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: '700' }}>
                Clients Say <br /> About Telosa
              </h2>
            </div>
            {/* Right Column: Testimonial */}
            <div className="col-md-6">
              <div className="bg-white text-dark p-4 rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://telosa.review/wp-content/uploads/2022/08/IMG-20220812-WA0026-60x65.jpg"
                    alt="Aayush Choudhary"
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '65px', objectFit: 'cover' }}
                  />
                  <div>
                    <span className="h5 mb-0">
                      Aayush Choudhary - Axelrod Solutions
                    </span>
                  </div>
                </div>
                <p>
                  An excellent product for the agencies to upsell to their customers.
                  As an agency, we can understand so much more from the feedback of
                  customers and pinpoint what to increase and what to improve all in one place.
                </p>
                <a
                  href="https://www.linkedin.com/in/aayushchoudhary/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://telosa.review/wp-content/uploads/2022/08/New-Project.png.webp"
                    alt="LinkedIn"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default TestimonialsSection
