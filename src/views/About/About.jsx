import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Easy Rent</h1>
        <p>
          Your trusted partner in finding the perfect property.
        </p>
      </div>

      {/* About Section */}
      <div className="about-section">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
            alt="About Easy Rent"
          />
        </div>

        <div className="about-content">
          <h2>Who We Are?</h2>

          <p>
            Easy Rent is a modern real estate platform that helps users find,
            buy and rent properties easily. We provide verified listings,
            trusted owners and premium properties across multiple cities.
          </p>

          <p>
            Our mission is to make property searching simple, secure and
            accessible for everyone.
          </p>
        </div>

      </div>

      {/* Services */}
      <div className="services">
        <h2>Our Services</h2>

        <div className="service-container">

          <div className="service-card">
            <h3>🏠 Property Listing</h3>
            <p>Browse hundreds of verified properties.</p>
          </div>

          <div className="service-card">
            <h3>🔍 Easy Search</h3>
            <p>Search properties by city, type and budget.</p>
          </div>

          <div className="service-card">
            <h3>🤝 Trusted Owners</h3>
            <p>Connect directly with verified property owners.</p>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="stats">

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

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default About;