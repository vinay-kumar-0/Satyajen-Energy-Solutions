function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GreenPower Tech</h3>
          <p>Leading provider of sustainable energy solutions. Quality products for a greener tomorrow.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        
        <div className="footer-section">
          <h3>Categories</h3>
          <a href="/products?category=Solar Panels">Solar Panels</a>
          <a href="/products?category=Inverters">Inverters</a>
          <a href="/products?category=Battery Storage">Battery Storage</a>
          <a href="/products?category=Solar Kits">Solar Kits</a>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 info@greenpowertech.com</p>
          <p>📱 +1 (555) 123-4567</p>
          <p>📍 123 Solar Street, Green City, GC 12345</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 GreenPower Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
