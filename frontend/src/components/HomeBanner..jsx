import React from 'react';

const HomeBanner = () => {
  return (
    <>
      {/* Inline style block for mobile tweaks (optional) */}
      <style>{`
        @media (max-width: 576px) {
          /* Reduce heading font size on small screens */
          .home-banner-title {
            font-size: 32px !important;
            line-height: 42px !important;
          }

          /* Slightly shrink form input/button */
          .banner-form-container {
            max-width: 100% !important;
          }
          .banner-form-container input {
            padding: 8px 10px !important;
            font-size: 13px !important;
          }
          .banner-form-container button {
            padding: 8px 15px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <div className="nt-section pt-60 pb-60 no-spacer-sw home-banner-section nt_section_155808">
        <div className="has-overlay"></div>
        <div className="container">
          {/* 
            Use flex-column-reverse flex-md-row to stack on mobile (text above video) 
            and side-by-side on md+ screens.
          */}
          <div className="row flex-column-reverse flex-md-row">
            {/* Left Column: Text & Form */}
            <div className="head-2 sp-head ps-start jw-common-product-form nt-column col-md-6">
              <div className="spacer py-2"></div>
              <h1
                style={{
                  fontSize: '45px',
                  color: '#333333',
                  lineHeight: '56px',
                  textAlign: 'left',
                }}
                className="vc_custom_heading custom_title home-banner-title"
              >
                Maximize Your Online Reputation, Boost Revenue Through Customer Reviews.
              </h1>
              <div
                className="section-heading section-heading--center section-heading--dark text-left"
                style={{ marginBottom: '1rem' }}
              >
                <div className="__description">
                  Appear on top for customers who search online. Emerge on most search
                  engines by getting a handful of customer reviews.
                </div>
              </div>

              {/* Updated Form Container */}
              <div style={{ marginTop: '1.5rem' }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle your request demo submission here
                    console.log('REQUEST DEMO clicked');
                  }}
                >
                  <div
                    className="banner-form-container"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #2694ea',
                      borderRadius: '30px',
                      overflow: 'hidden',
                      maxWidth: '450px',
                    }}
                  >
                    {/* Email Input */}
                    <input
                      type="email"
                      placeholder="Enter Your Email-Id"
                      style={{
                        flex: 1,
                        border: 'none',
                        outline: 'none',
                        padding: '10px 15px',
                        fontSize: '14px',
                        color: '#333',
                      }}
                      required
                    />

                    {/* Request Demo Button */}
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#2694ea',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}
                    >
                      REQUEST DEMO
                    </button>
                  </div>
                </form>
              </div>

              <div className="spacer py-6"></div>
            </div>

            {/* Right Column: Video */}
            <div className="nt-column col-md-6">
              <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                <div className="wpb_wrapper">
                  <video
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                    muted
                    controlsList="nodownload"
                    style={{ borderRadius: '6px' }}
                  >
                    <source
                      src="https://telosa.review/wp-content/uploads/2023/03/Telosa-reviews.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
