import React from "react";
import Social from "../Social/Social";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="container footer-container">
      <Social />
      <p>&copy;Degen Heroes - 2022 All rights reserved. </p>
    </section>
  );
};

export default Footer;
