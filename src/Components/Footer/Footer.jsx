import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Easy Rent</h2>

        <p>
          Find your dream property with ease.
          Buy, Rent and Explore properties
          across India.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/properties">Properties</a>
          <a href="/about">About</a>
        </div>

        <p className="copyright">
          © 2026 Easy Rent. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;