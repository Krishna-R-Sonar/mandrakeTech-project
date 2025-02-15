import React from 'react';

const KnockOffSection = () => {
  return (
    <div
      className="py-5"
      style={{
        background: 'linear-gradient(90deg, #2a76e0 0%, #5ba3f2 100%)',
        color: '#fff',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://telosa.review/wp-content/uploads/2022/07/product-opt-in@2x-150x150.png.webp"
              alt="Knock Off Negative Reviews"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Column: Title, Description, Form */}
          <div className="col-md-8">
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem',
              }}
            >
              Knock Off Negative Reviews With Tested Templates!
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Reverting to negative reviews is like walking on a double‐edged sword and is
              no less than an art. It requires you to perfectly engage with frustrated
              customers while safeguarding your business’s reputation. Download these
              awesome templates to knock off negative reviews!
            </p>

            {/* Form */}
            <form>
              <div className="row g-2">
                {/* Name */}
                <div className="col-12 col-sm-6 col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>

                {/* Email */}
                <div className="col-12 col-sm-6 col-md-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email-Id"
                  />
                </div>

                {/* Phone */}
                <div className="col-12 col-sm-6 col-md-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone Num"
                  />
                </div>

                {/* Download Button */}
                <div className="col-12 col-sm-6 col-md-3">
                  <button
                    type="submit"
                    className="btn btn-light w-100"
                    style={{ fontWeight: 600 }}
                  >
                    DOWNLOAD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnockOffSection;
