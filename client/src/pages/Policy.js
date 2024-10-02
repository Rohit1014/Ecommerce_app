import React from 'react';
import Layout from '../components/Layouts/Layout';
import abc from '../images/privacy.jpg'
import './css/Policy.css';

export const Policy = () => {
  return (
    <Layout title={"Policy-Ecommerce"} >
      <div className="privacy-page">
        <div className="image-section">
          <img src={abc} alt="Privacy Policy" />
        </div>
        <div className="text-section-policy">
          <h2>Privacy Policy</h2>
          <p>Example policy</p>
          <h3>Information We Collect</h3>
          <p>Example policy</p>
          <h3>How We Use Information</h3>
          <p>Example policy</p>
          <h3>Your Rights</h3>
          <p>Example policy</p>
        </div>
      </div>
    </Layout>
  );
}
