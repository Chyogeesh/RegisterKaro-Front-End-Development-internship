import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Easy to Use</h3>
          <p>User-friendly interface for seamless registrations.</p>
        </div>
        <div className="card">
          <h3>Fast Processing</h3>
          <p>Quick and efficient registration processing.</p>
        </div>
        <div className="card">
          <h3>Secure</h3>
          <p>Your data is safe with our advanced security measures.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
