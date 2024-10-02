import React from 'react';
import Layout from "../components/Layouts/Layout"
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import about from "../images/contactus.jpg";
import "./css/Contactus.css"



export const Contactus= () => {
  return (
    <Layout title={"Contact us-Ecommerce"}>
    <div className="contact-page">
      <div className="image-section-contact">
        <img src={about} alt="About Us" style={{width:"100%"}}/>
      </div>
      <div className="info-section">
      <h2 className="contact-title">Contact Us</h2>
        <p>
        <MdOutlineEmail /> :rohitpandey1410@gmail.com
        </p>
        <p>
        <FaMobileAlt />:+91 23 45 67 89
        </p>
        <p>
        <BsFillTelephoneFill />
        :180-000-000(Toll free)
        </p>
      </div>
    </div>
    </Layout>
  );
};


