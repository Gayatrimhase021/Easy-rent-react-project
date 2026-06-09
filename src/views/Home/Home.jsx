import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PropertyCard from "../../Components/PropertyCard";
import { PROPERTIES } from "../data";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

   
      <section className="hero">

        <div className="hero-content">
          <h1>Find Your Dream Home</h1>

          <p>
            Explore premium apartments,
            villas and plots across India.
          </p>

          <button>
            Explore Properties
          </button>
        </div>

      </section>

     

   
      <section className="featured">

        <h2>Featured Properties</h2>

        <div className="property-grid">

          {PROPERTIES.slice(0, 6).map(
            (propertyObj) => (
              <PropertyCard
                key={propertyObj.id}
                id={propertyObj.id}
                title={propertyObj.title}
                propertyType={propertyObj.type}
                city={propertyObj.city}
                rent={propertyObj.price}
                rating={propertyObj.rating}
                image={propertyObj.images[0]}
              />
            )
          )}

        </div>

      </section>


      <section className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>200+ Properties</h3>
            <p>
              Large collection of verified
              properties.
            </p>
          </div>

          <div className="feature-card">
            <h3>Trusted Owners</h3>
            <p>
              All properties are verified.
            </p>
          </div>

          <div className="feature-card">
            <h3>Best Locations</h3>
            <p>
              Prime locations across cities.
            </p>
          </div>

        </div>

      </section>

     
      <section className="stats">

        <div className="stat-box">
          <h2>200+</h2>
          <p>Properties</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Verified Listings</p>
        </div>

      </section>

     
      <section className="testimonials">

        <h2>What Our Clients Say</h2>

        <div className="testimonial-container">

          <div className="testimonial-card">
            <p>
              Found my dream apartment in
              just a few days.
            </p>
            <h4>- Rahul</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Excellent service and trusted
              listings.
            </p>
            <h4>- Sneha</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Best property website I have
              used.
            </p>
            <h4>- Amit</h4>
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>
          Ready To Find Your Dream Home?
        </h2>

        <button>
          Get Started
        </button>

      </section>

      <Footer />
    </>
  );
}

export default Home;