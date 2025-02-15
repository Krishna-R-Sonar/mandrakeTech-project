import React from 'react';

const BeatCompetitionSection = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#1a4a7b',
        color: '#fff',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="https://telosa.review/wp-content/uploads/2021/12/Overview-Blue-Banner-1.png.webp"
              alt="google review management software"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Column: Text */}
          <div className="col-md-6">
            <h3
              className="mb-4"
              style={{
                fontSize: '45px',
                lineHeight: '54px',
                color: '#ffffff',
                textAlign: 'left',
              }}
            >
              Beat Your Competition With
              <br />
              Higher Customer Reviews
            </h3>
            <p style={{ color: '#fff', marginBottom: '1rem' }}>
              With a single dashboard, you can generate new reviews, moderate
              them, and market them across the web to various locations.
            </p>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '30px',
                textAlign: 'left',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              93% of customers will read reviews of local businesses to
              determine its quality. (BrightLocal)
            </p>

            <h4
              style={{
                fontSize: '40px',
                lineHeight: '50px',
                textAlign: 'left',
                color: '#ffffff',
              }}
            >
              The more the reviews better it is!
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeatCompetitionSection;
