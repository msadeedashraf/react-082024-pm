import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              TripZila
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="search.html">
                    Search
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="login.html">
                    Login
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="manage-bookings.html">
                    Manage Bookings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="contact.html">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
