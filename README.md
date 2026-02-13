# Digital Catalogue Website - GreenPower Tech

A modern, responsive digital catalogue website for sustainable energy solutions built with React and Node.js.

## 🌟 Features

- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **Product Catalogue**: Browse comprehensive product listings with categories
- ✅ **Product Details**: Detailed information including features and specifications
- ✅ **Category Filtering**: Filter products by categories (Solar Panels, Inverters, Battery Storage, etc.)
- ✅ **Contact Form**: Functional contact form with backend integration
- ✅ **Professional UI**: Clean, modern interface with smooth navigation
- ✅ **All Menu Links Connected**: Home, Products, About, and Contact pages fully functional
- ✅ **No Direct Pricing**: Product information without displaying prices directly

## 🚀 Technologies Used

### Frontend
- React 18
- React Router DOM (for navigation)
- Axios (for API calls)
- Vite (build tool)
- CSS3 (responsive styling)

### Backend
- Node.js
- Express.js
- CORS enabled
- RESTful API architecture

## 📁 Project Structure

```
satyajen/
├── backend/
│   ├── index.js          # Express server with API endpoints
│   ├── package.json
│   └── .env              # Environment variables
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Products.jsx
    │   │   ├── ProductDetail.jsx
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🎯 Running the Application

### Start Backend Server (Port 5000)
```bash
cd backend
npm start
```

### Start Frontend Development Server (Port 3000)
```bash
cd frontend
npm run dev
```

The backend will run on `http://localhost:5000`
The frontend will run on `http://localhost:3000`

## 📱 Pages & Features

### 1. Home Page
- Hero section with call-to-action buttons
- Product categories showcase
- Featured products grid
- "Why Choose Us" section with company values

### 2. Products Page
- Complete product catalogue
- Category filtering
- Product cards with images and descriptions
- Responsive grid layout

### 3. Product Detail Page
- Large product image
- Comprehensive description
- Key features list
- Technical specifications
- "Request Quote" call-to-action

### 4. About Page
- Company information
- Mission and values
- Why choose us section
- Professional layout

### 5. Contact Page
- Contact form (Name, Email, Phone, Message)
- Contact information display
- Form validation
- Success message on submission

## 🎨 Design Features

- **Color Scheme**: Modern cyan/teal primary colors with professional dark accents
- **Typography**: Clean, readable fonts optimized for web
- **Layout**: Grid-based responsive layouts
- **Navigation**: Sticky navbar with mobile menu toggle
- **Images**: High-quality product images from Unsplash
- **Icons**: Emoji-based icons for quick visual recognition
- **Animations**: Smooth hover effects and transitions

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=CategoryName` - Filter by category
- `GET /api/products/:id` - Get single product

### Categories
- `GET /api/categories` - Get all categories

### Contact
- `POST /api/contact` - Submit contact form

## 💻 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 768px - 480px
- Mobile: < 480px

## 🔧 Customization

### Change Colors
Edit CSS variables in `frontend/src/index.css`:
```css
:root {
  --primary-color: #06b6d4;
  --secondary-color: #0e7490;
  --dark-color: #1e293b;
  /* Add more custom colors */
}
```

### Add Products
Edit the `products` array in `backend/index.js`

### Modify Categories
Edit the `categories` array in `backend/index.js`

## 📦 Building for Production

### Build Frontend
```bash
cd frontend
npm run build
```

The production-ready files will be in the `frontend/dist` directory.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Assignment Requirements Met

✅ Full website based on reference  
✅ Custom design with unique colors and typography  
✅ Professional look and feel  
✅ No direct product prices displayed  
✅ Responsive design (desktop & mobile)  
✅ All menu links properly connected  
✅ Clean navigation structure  
✅ Good user experience  

## 👨‍💻 Development Notes

This project demonstrates:
- Modern React development with hooks
- RESTful API design
- Responsive CSS techniques
- Component-based architecture
- Client-side routing
- Form handling and validation
- Professional UI/UX design

## 📄 License

This project is created for internship assignment purposes.

---

Built with ❤️ using React and Node.js
