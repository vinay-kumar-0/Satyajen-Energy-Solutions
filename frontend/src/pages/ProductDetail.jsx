import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/products" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary-color)' }}>
        ← Back to Products
      </Link>

      <div className="product-detail">
        <div>
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-detail-info">
          <span className="category">{product.category}</span>
          <h1>{product.name}</h1>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            {product.description}
          </p>

          <div className="features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="specifications">
            <h3>Technical Specifications</h3>
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="spec-item">
                <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            <Link to="/products" className="btn btn-outline" style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
              View More Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
