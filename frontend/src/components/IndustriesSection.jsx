import React from 'react';

const industries = [
  {
    name: 'Auto',
    url: '/auto',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/Group.png.webp',
  },
  {
    name: 'Retail',
    url: '/retail',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/icon-8.png.webp',
  },
  {
    name: 'Healthcare',
    url: '/healthcare',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/noun_Health-Care_404968.png.webp',
  },
  {
    name: 'Dental',
    url: '/dental',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/icon-9.png.webp',
  },
  {
    name: 'Legal',
    url: '/legal',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/noun_legal_3848990.png.webp',
  },
  {
    name: 'Restaurants',
    url: '/restaurants',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/noun_Restaurant_1069413.png.webp',
  },
  {
    name: 'Home Services',
    url: '/home-services',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/noun_Home_1526044.png.webp',
  },
  {
    name: 'Financial Services',
    url: '/financial',
    icon: 'https://telosa.review/wp-content/uploads/2021/08/noun_Rupee_2876592-2.png.webp',
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Heading */}
        <h2
          className="text-center mb-5"
          style={{ fontSize: '2.5rem', fontWeight: 700, color: '#333' }}
        >
          Industries We Have Work With
        </h2>

        {/* Grid of Industries */}
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {industries.map((industry) => (
            <div className="col" key={industry.name}>
              <a
                href={industry.url}
                className="text-decoration-none text-dark"
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="card shadow-sm border-0 rounded text-center p-4"
                  style={{
                    minHeight: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={industry.icon}
                    alt={`Icon for ${industry.name} industry`}
                    style={{
                      width: '60px',
                      height: 'auto',
                      margin: '0 auto 1rem auto',
                    }}
                  />
                  <h5
                    className="mb-0"
                    style={{ fontSize: '1rem', fontWeight: 500 }}
                  >
                    {industry.name}
                  </h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
