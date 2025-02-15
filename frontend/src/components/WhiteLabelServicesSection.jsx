import React from 'react';

const WhiteLabelServicesSection = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        {/* Heading */}
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '1rem',
          }}
        >
          White- Label Managed Services
        </h2>
        {/* Description */}
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          Deploy our managed services for reviews and to stay on top of feedback without
          the overhead at your hand. While you manage your core business, our team of experts
          in online reputation would come as an extension of yours.
        </p>
      </div>
    </section>
  );
};

export default WhiteLabelServicesSection;
