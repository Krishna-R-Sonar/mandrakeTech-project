import React from 'react';

const ReviewModerationSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h6
              className="text-uppercase text-muted mb-2"
              style={{ letterSpacing: '1px', fontSize: '0.875rem' }}
            >
              Review Moderation
            </h6>
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: '2rem', color: '#333' }}
            >
              An Easier Way to Operate Online Review Management
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Hear your customers and solve their problems. With us, you can manage
              and moderate all your reviews from a single place.
            </p>
            <a
              href="https://telosa.review/review-moderation/"
              className="text-decoration-none fw-semibold"
              style={{ color: '#000' }}
            >
              READ MORE &rarr;
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 text-center text-md-end">
            <img
              src="https://telosa.review/wp-content/uploads/2021/11/Overview-REVIEW-MODERATION.png.webp"
              alt="review management"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewModerationSection;
