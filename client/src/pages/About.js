import React from 'react'
import Layout from '../components/Layouts/Layout'
import about from "../images/aboutus.jpg"
import "./css/About.css"
export const About = () => {
  return (
    <Layout title={"About-Ecommerce"} description={""} >
    <div className="about-page">
      <div className="image-section">
        <img src={about} alt="About Us" />
      </div>
      <div className="info-section-about">
        <h2 className="about-title">About Us</h2>
        <p>
          We are a dedicated team of professionals with a passion for providing
          top-quality services. Our mission is to ensure that our clients are
          satisfied with every aspect of our work.
        </p>
        <p>
          With years of experience in the industry, we strive to deliver
          excellence in everything we do. Our values are rooted in integrity,
          trust, and innovation.
        </p>
        <p>
          Join us on this journey to success, and let's achieve greatness
          together.
        </p>
      </div>
      
    </div>
    </Layout>
  );
};
export default About
