import { useState } from 'react';
import { submitContactForm } from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="section-heading">
        <h2>Get in Touch</h2>
        <p>Have questions? We're here to help!</p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Reach out to us for product inquiries, technical support, or to discuss
            your energy solution needs. Our team is ready to assist you.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">📧</div>
              <div>
                <strong>Email</strong>
                <p>info@greenpowertech.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">📱</div>
              <div>
                <strong>Phone</strong>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <strong>Address</strong>
                <p>123 Solar Street<br/>Green City, GC 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">🕒</div>
              <div>
                <strong>Business Hours</strong>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            {success && (
              <div className="success-message">
                Thank you for contacting us! We'll get back to you soon.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
