import React from 'react';

const ReviewMarketingSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="https://telosa.review/wp-content/uploads/2021/11/Review-Marketing-Online-Reviews-that-1.png.webp"
              alt="social media reputation management"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Column: Content */}
          <div className="col-md-6">
            <h6
              className="text-uppercase text-muted mb-2"
              style={{ letterSpacing: '1px', fontSize: '0.875rem' }}
            >
              Review Marketing
            </h6>
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: '2rem', color: '#333' }}
            >
              Let Your Existing Customers Bring New Ones
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              The word of mouth through your current customers is going to act as
              social proof to gain trust and bring new customers.
            </p>
            <a
              href="https://telosa.review/review-marketing-tool/"
              className="text-decoration-none fw-semibold"
              style={{ color: '#000' }}
            >
              READ MORE &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewMarketingSection;
