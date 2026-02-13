import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(selectedCategory || ''),
          getCategories()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="container">
      <div className="section-heading">
        <h2>{selectedCategory || 'All Products'}</h2>
        <p>Browse our complete catalogue of sustainable energy solutions</p>
      </div>

      {/* Category Filter */}
      <div className="categories">
        <Link 
          to="/products" 
          className={`category-card ${!selectedCategory ? 'active' : ''}`}
        >
          <div className="icon">📦</div>
          <h3>All Products</h3>
        </Link>
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/products?category=${category.name}`}
            className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
          >
            <div className="icon">{category.icon}</div>
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
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
      )}
    </div>
  );
}

export default Products;
