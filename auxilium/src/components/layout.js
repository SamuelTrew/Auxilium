import React from "react";
import PropTypes from "prop-types";
import '../styles/global.scss';

import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <div id="outer-container">
        <main id="page-wrap" style={{marginTop: '60px',}}>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;