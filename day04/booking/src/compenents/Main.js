import React from "react";

const Main = () => {
  return (
    <>
      <main class="container my-5">
        <div class="text-center mb-5">
          <h1 class="text-primary">Welcome to TripZila</h1>
          <p>Your gateway to the best stays around the world</p>
        </div>

        <section id="search-property" class="mb-5">
          <h2 class="text-center text-primary mb-4">
            Find Your Perfect Property
          </h2>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <form id="search-form" class="bg-white p-4 rounded shadow-sm">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="location" class="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="location"
                      placeholder="Enter city or property name"
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="check-in-date" class="form-label">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="check-in-date"
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="check-out-date" class="form-label">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="check-out-date"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="number-of-guests" class="form-label">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="number-of-guests"
                      min="1"
                      placeholder="Number of guests"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="room-type" class="form-label">
                      Room Type
                    </label>
                    <select class="form-select" id="room-type">
                      <option selected>Any</option>
                      <option>Single Room</option>
                      <option>Double Room</option>
                      <option>Suite</option>
                    </select>
                  </div>
                  <div class="col-12 text-center mt-4">
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="fav-destinations" class="mb-5">
          <h2 class="text-center text-primary mb-4">Favorite Destinations</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="images/paris.png"
                  width="350"
                  height="200"
                  class="card-img-top"
                  alt="Destination 1"
                />
                <div class="card-body">
                  <h5 class="card-title">Paris</h5>
                  <p class="card-text">
                    The City of Lights awaits you with its stunning landmarks
                    and rich history.
                  </p>
                  <a href="search.html" class="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="images/newyork.png"
                  width="350"
                  height="200"
                  class="card-img-top"
                  alt="Destination 2"
                />
                <div class="card-body">
                  <h5 class="card-title">New York</h5>
                  <p class="card-text">
                    Experience the hustle and bustle of the Big Apple, from
                    Broadway to Central Park.
                  </p>
                  <a href="search.html" class="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="images/tokyo.png"
                  width="350"
                  height="200"
                  class="card-img-top"
                  alt="Destination 3"
                />
                <div class="card-body">
                  <h5 class="card-title">Tokyo</h5>
                  <p class="card-text">
                    Immerse yourself in the vibrant culture and cutting-edge
                    technology of Japan's capital.
                  </p>
                  <a href="search.html" class="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="popular-properties" class="mb-5">
          <h2 class="text-center text-primary mb-4">Popular Properties</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="images/grand_plaza.png"
                  width="350"
                  height="200"
                  class="card-img-top"
                  alt="Property 1"
                />
                <div class="card-body">
                  <h5 class="card-title">Grand Plaza Hotel</h5>
                  <p class="card-text">
                    Luxury and comfort at the heart of the city, perfect for any
                    occasion.
                  </p>
                  <a href="search.html" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="images/seaside_resort.png"
                  width="350"
                  height="200"
                  class="card-img-top"
                  alt="Property 2"
                />
                <div class="card-body">
                  <h5 class="card-title">Seaside Resort</h5>
                  <p class="card-text">
                    Relax by the beach and enjoy top-notch amenities at our
                    seaside getaway.
                  </p>
                  <a href="search.html" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="images/mountain_lodg.png"
                  width="350"
                  height="200"
                  class="card-img-top"
                  alt="Property 3"
                />
                <div class="card-body">
                  <h5 class="card-title">Mountain Lodge</h5>
                  <p class="card-text">
                    Escape to the mountains for a serene retreat with
                    breathtaking views.
                  </p>
                  <a href="search.html" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="deals" class="mb-5">
          <h2 class="text-center text-primary mb-4">Exclusive Deals</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  class="card-img-top"
                  alt="Deal 1"
                />
                <div class="card-body">
                  <h5 class="card-title">50% Off on Paris Stays</h5>
                  <p class="card-text">
                    Enjoy a fantastic discount on stays in Paris. Limited time
                    offer!
                  </p>
                  <a href="search.html" class="btn btn-success">
                    Get Deal
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  class="card-img-top"
                  alt="Deal 2"
                />
                <div class="card-body">
                  <h5 class="card-title">Free Breakfast in New York</h5>
                  <p class="card-text">
                    Book now and enjoy complimentary breakfast at select hotels
                    in New York.
                  </p>
                  <a href="search.html" class="btn btn-success">
                    Get Deal
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="https://via.placeholder.com/350x200"
                  class="card-img-top"
                  alt="Deal 3"
                />
                <div class="card-body">
                  <h5 class="card-title">Stay 3 Nights, Pay for 2 in Tokyo</h5>
                  <p class="card-text">
                    Book a 3-night stay in Tokyo and only pay for 2 nights.
                    Don’t miss out!
                  </p>
                  <a href="search.html" class="btn btn-success">
                    Get Deal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
