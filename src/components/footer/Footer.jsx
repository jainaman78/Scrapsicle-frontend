import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer class="site-footer">
  <div class="footer-container">
    <div class="footer-column">
      <h3>About Us</h3>
      <p>Insert information about your company here.</p>
    </div>
    <div class="footer-column">
      <h3>Help & Support</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Shipping Information</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>


  );
}

export default Footer;
