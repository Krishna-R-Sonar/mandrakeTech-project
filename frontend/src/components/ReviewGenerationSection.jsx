import React from 'react';

const ReviewGenerationSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="https://telosa.review/wp-content/uploads/2021/11/Overview-REVIEW-GENERATION.png.webp"
              alt="Review Generation"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Column: Content */}
          <div className="col-md-6">
            {/* Subheading */}
            <h6
              className="text-uppercase text-muted mb-2"
              style={{ letterSpacing: '1px', fontSize: '0.875rem' }}
            >
              Review Generation
            </h6>
            {/* Main Title */}
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: '2rem', color: '#333' }}
            >
              Collect Customer Reviews on Autopilot
            </h2>
            {/* Description */}
            <p
              className="text-muted"
              style={{ fontSize: '1rem', lineHeight: '1.6' }}
            >
              There’s never been an easier way to collect new reviews. We share
              the best review sites on the web with customers to share their
              valuable feedback.
            </p>
            {/* Read More Link */}
            <a
              href="https://telosa.review/review-generation-tool/"
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

export default ReviewGenerationSection;
