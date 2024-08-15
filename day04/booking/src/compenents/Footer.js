import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-white py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>
                TripZila is a platform where you can find and book the best
                accommodations worldwide.
              </p>
            </div>
            <div class="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="about.html" class="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    class="text-white text-decoration-none"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="privacy-policy.html"
                    class="text-white text-decoration-none"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="terms-conditions.html"
                    class="text-white text-decoration-none"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Follow Us</h5>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    class="text-white text-decoration-none"
                  >
                    <i class="fab fa-facebook fa-lg"></i> Facebook
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    class="text-white text-decoration-none"
                  >
                    <i class="fab fa-twitter fa-lg"></i> Twitter
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    class="text-white text-decoration-none"
                  >
                    <i class="fab fa-instagram fa-lg"></i> Instagram
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    class="text-white text-decoration-none"
                  >
                    <i class="fab fa-linkedin fa-lg"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-center mt-4">
            <p>&copy; 2024 TripZila. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
