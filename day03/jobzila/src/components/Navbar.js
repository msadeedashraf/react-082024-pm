import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <h1>JobZila</h1>

        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="jobsearch.html">Job Search</a>
            </li>
            <li>
              <a href="joblisting_json.html">Job Listing</a>
            </li>
            <li>
              <a href="terms.html">Terms of service</a>
            </li>
            <li>
              <a href="privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="contact-us.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
