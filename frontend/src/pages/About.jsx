function About() {
  return (
    <div className="container">
      <div className="section-heading">
        <h2>About GreenPower Tech</h2>
        <p>Your trusted partner in sustainable energy solutions</p>
      </div>

      <div className="about-content">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800" 
            alt="Solar Installation" 
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h2>Leading the Green Energy Revolution</h2>
          <p>
            Since our establishment, GreenPower Tech has been at the forefront of providing
            high-quality sustainable energy solutions to residential, commercial, and industrial
            clients worldwide.
          </p>
          <p>
            We specialize in offering a comprehensive range of solar panels, inverters, battery
            storage systems, and complete solar kits. Our commitment to excellence ensures that
            every product we offer meets the highest standards of quality and performance.
          </p>
          <p>
            With a team of experienced professionals and partnerships with leading manufacturers,
            we provide not just products, but complete energy solutions tailored to your specific
            needs.
          </p>
        </div>
      </div>

      <div className="section-heading" style={{ marginTop: '3rem' }}>
        <h2>Our Values</h2>
        <p>The principles that guide everything we do</p>
      </div>

      <div className="values">
        <div className="value-card">
          <div className="icon">🌍</div>
          <h3>Sustainability</h3>
          <p>Committed to reducing carbon footprint and promoting renewable energy adoption worldwide.</p>
        </div>
        <div className="value-card">
          <div className="icon">✨</div>
          <h3>Quality Excellence</h3>
          <p>Only the finest products from trusted manufacturers with proven track records.</p>
        </div>
        <div className="value-card">
          <div className="icon">🤝</div>
          <h3>Customer First</h3>
          <p>Your satisfaction is our priority. We provide ongoing support and guidance.</p>
        </div>
        <div className="value-card">
          <div className="icon">🎯</div>
          <h3>Innovation</h3>
          <p>Staying ahead with the latest technologies and solutions in renewable energy.</p>
        </div>
      </div>

      <div style={{ background: 'var(--light-color)', padding: '3rem', borderRadius: '0.75rem', marginTop: '3rem' }}>
        <div className="section-heading">
          <h2>Why Partner With Us?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Wide Product Range</h3>
            <p>From individual components to complete solar systems, we have everything you need.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Expert Consultation</h3>
            <p>Our team helps you choose the right products for your specific requirements.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Competitive Pricing</h3>
            <p>Get the best value for your investment without compromising on quality.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Reliable Support</h3>
            <p>Ongoing technical support and assistance whenever you need it.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
