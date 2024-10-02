import React from 'react';
import Headers from './Headers';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import  { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = ({children,title,description,author,keywords}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                  <meta name="keywords" content={keywords}/>
                  <meta name="author" content={author}/>
                  <title>{title}</title>
    
      </Helmet>
        <Headers />
        <main style={{minHeight:"70vh"}}>
        <Toaster />
        {children}
        </main>
        <Footer />

    </div>
  )
}
Layout.defaultProps={
title:"Ecommerce-website shop now",
description:"Ecommerce mern website",
keywords:"react node.js mongodb express",
author:"Rohit pandey"
}
export default Layout;
