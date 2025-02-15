import React from 'react';

const WatchDemoSection = () => {
  const handleWatchDemo = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/telosa/30mins?hide_event_type_details=1',
      });
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#2694ea',
        position: 'relative',
        marginTop: '-100px',
        paddingTop: '150px',
        zIndex: 1,
      }}
      className="text-white py-5"
    >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-sm-6 mb-4 mb-sm-0">
            <h3
              style={{
                fontSize: '40px',
                lineHeight: '54px',
                textAlign: 'left',
              }}
              className="mb-3"
            >
              Our platform can help you to
              <br />
              increase the revenue of your
              <br />
              business in and out every
              <br />
              month!
            </h3>
            <p style={{ maxWidth: '400px' }}>
              Manage feedback from reviews, likes, listings,
              <br />
              and QnA into your Leads. – Just from One Platform!
            </p>
          </div>

          {/* Right Column */}
          <div className="col-sm-6 d-flex align-items-center justify-content-center">
            <a
              id="calendly-inline-button-widget"
              data-url="https://calendly.com/telosa/30mins?hide_event_type_details=1"
              className="btn btn-light fw-semibold"
              href="#!"
              onClick={handleWatchDemo}
              style={{
                fontSize: '14px',
                color: '#2694ea',
              }}
            >
              WATCH DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchDemoSection;
