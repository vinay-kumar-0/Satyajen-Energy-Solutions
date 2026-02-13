import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setFeaturedProducts(productsData.slice(0, 6));
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Sustainable Energy Solutions</h1>
          <p>Discover our comprehensive range of solar panels, inverters, and energy storage systems for a greener future.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div className="container">
        <div className="section-heading">
          <h2>Product Categories</h2>
          <p>Browse our wide range of sustainable energy products</p>
        </div>
        
        <div className="categories">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/products?category=${category.name}`}
              className="category-card"
            >
              <div className="icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>

        {/* Featured Products */}
        <div className="section-heading" style={{ marginTop: '3rem' }}>
          <h2>Featured Products</h2>
          <p>Our most popular energy solutions</p>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3>{product.name}</h3>
                <p>{product.description.substring(0, 100)}...</p>
                <Link to={`/products/${product.id}`} className="product-link">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{ background: 'var(--light-color)', padding: '3rem 0' }}>
        <div className="container">
          <div className="section-heading">
            <h2>Why Choose Us</h2>
            <p>Your trusted partner in sustainable energy</p>
          </div>
          
          <div className="values">
            <div className="value-card">
              <div className="icon">🌟</div>
              <h3>Premium Quality</h3>
              <p>Top-tier products from leading manufacturers with extensive warranties</p>
            </div>
            <div className="value-card">
              <div className="icon">💡</div>
              <h3>Expert Guidance</h3>
              <p>Professional consultation to help you choose the right solutions</p>
            </div>
            <div className="value-card">
              <div className="icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to get your projects started</p>
            </div>
            <div className="value-card">
              <div className="icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Ongoing support and maintenance for all our products</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
