import React from 'react';

const ManagedServicesFeaturesSection = () => {
  return (
    <section
      className="py-5"
      style={{
        position: 'relative',
        zIndex: 2,
        marginBottom: 0,
      }}
    >
      <div className="container nt-section ps-6">
        <div className="row g-4">
          {/* 1. Expertise */}
          <div className="col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <img
                src="https://telosa.review/wp-content/uploads/2021/10/icon-1.png"
                alt="online reputation"
                style={{
                  width: '114px',
                  height: '112px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h5
                style={{
                  fontSize: '21px',
                  color: '#333333',
                  lineHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Expertise
              </h5>
              <p style={{ textAlign: 'center' }}>
                While you manage your core business, get a team of experts to be an extension
                of the marketing team and support you on online reputation operations.
              </p>
            </div>
          </div>

          {/* 2. Improved Metrics */}
          <div className="col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <img
                src="https://telosa.review/wp-content/uploads/2021/10/icon-2.png.webp"
                alt="removing negative google reviews"
                style={{
                  width: '140px',
                  height: '122px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h5
                style={{
                  fontSize: '21px',
                  color: '#333333',
                  lineHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Improved Metrics
              </h5>
              <p style={{ textAlign: 'center' }}>
                Response Time – Our customers have reported more than 50% improvement in
                responses to the reviews. Responding to customer reviews is extremely important.
              </p>
            </div>
          </div>

          {/* 3. Unique Responses */}
          <div className="col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <img
                src="https://telosa.review/wp-content/uploads/2021/10/icon-3.png"
                alt="removing negative google reviews"
                style={{
                  width: '118px',
                  height: '106px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h5
                style={{
                  fontSize: '21px',
                  color: '#333333',
                  lineHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Unique Responses
              </h5>
              <p style={{ textAlign: 'center' }}>
                Our experts will craft unique, SEO-friendly responses both for positive and
                negative reviews.
              </p>
            </div>
          </div>

          {/* 4. Review Marketing */}
          <div className="col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <img
                src="https://telosa.review/wp-content/uploads/2021/10/icon-4.png.webp"
                alt="removing bad google reviews"
                style={{
                  width: '73px',
                  height: '58px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h5
                style={{
                  fontSize: '21px',
                  color: '#333333',
                  lineHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Review Marketing
              </h5>
              <p style={{ textAlign: 'center' }}>
                Monthly and quarterly briefings to let you know the health of your online
                reputation at single / multi-location level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedServicesFeaturesSection;
