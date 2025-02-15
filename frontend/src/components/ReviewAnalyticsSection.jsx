import React from 'react';

const ReviewAnalyticsSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            {/* Subtitle */}
            <h6
              className="text-uppercase text-muted mb-2"
              style={{ letterSpacing: '1px', fontSize: '0.875rem' }}
            >
              Review Analytics
            </h6>
            {/* Main Title */}
            <h2 className="fw-bold mb-3" style={{ fontSize: '2rem', color: '#333' }}>
              Attract the Right Audience with the Power of Analytics
            </h2>
            {/* Description */}
            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              With correct analytics, you can target the right set of audiences and gain
              more conversions and more sales.
            </p>
            {/* Read More Link */}
            <a
              href="https://telosa.review/review-analytics-tool/"
              className="text-decoration-none fw-semibold"
              style={{ color: '#000' }}
            >
              READ MORE &rarr;
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 text-center text-md-end">
            <img
              src="https://telosa.review/wp-content/uploads/2021/11/Overview-REVIEW-ANALYTICS.png.webp"
              alt="manage reviews"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewAnalyticsSection;
