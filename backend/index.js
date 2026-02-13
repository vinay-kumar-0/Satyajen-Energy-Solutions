import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Add trust proxy for production
app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Sample product data for digital catalogue
const products = [
  {
    id: 1,
    name: 'Solar Panel 400W',
    category: 'Solar Panels',
    description: 'High-efficiency monocrystalline solar panel with 400W power output. Perfect for residential and commercial installations.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    features: ['400W Power Output', '25 Year Warranty', 'Weather Resistant', 'Easy Installation'],
    specifications: {
      power: '400W',
      efficiency: '21.5%',
      dimensions: '1722 x 1134 x 30 mm',
      weight: '21 kg'
    }
  },
  {
    id: 2,
    name: 'Solar Inverter 5kW',
    category: 'Inverters',
    description: 'Pure sine wave solar inverter with 5kW capacity. Smart monitoring and high conversion efficiency.',
    image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800',
    features: ['5kW Capacity', 'Pure Sine Wave', 'LCD Display', 'Overload Protection'],
    specifications: {
      capacity: '5000W',
      inputVoltage: '120-450V DC',
      outputVoltage: '230V AC',
      efficiency: '97.5%'
    }
  },
  {
    id: 3,
    name: 'Lithium Battery Pack 10kWh',
    category: 'Battery Storage',
    description: 'Advanced lithium-ion battery storage system. Scalable, long-lasting, and maintenance-free.',
    image: 'https://images.unsplash.com/photo-1625876409727-e9192cf5ae0a?w=800',
    features: ['10kWh Capacity', '6000 Cycles', 'Modular Design', 'Remote Monitoring'],
    specifications: {
      capacity: '10kWh',
      voltage: '48V',
      cycles: '6000+',
      warranty: '10 years'
    }
  },
  {
    id: 4,
    name: 'Solar Panel 550W',
    category: 'Solar Panels',
    description: 'Premium bifacial solar panel with 550W output. Maximum energy generation from both sides.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
    features: ['550W Bifacial', '30 Year Warranty', 'Anti-PID Technology', 'High Snow Load'],
    specifications: {
      power: '550W',
      efficiency: '22.8%',
      dimensions: '2278 x 1134 x 35 mm',
      weight: '28 kg'
    }
  },
  {
    id: 5,
    name: 'Hybrid Inverter 8kW',
    category: 'Inverters',
    description: 'Advanced hybrid solar inverter with grid-tie and off-grid capabilities. Smart energy management.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
    features: ['8kW Hybrid', 'WiFi Monitoring', 'Battery Compatible', 'Dual MPPT'],
    specifications: {
      capacity: '8000W',
      mppt: 'Dual MPPT',
      efficiency: '98.1%',
      warranty: '10 years'
    }
  },
  {
    id: 6,
    name: 'Solar Charge Controller',
    category: 'Controllers',
    description: 'MPPT solar charge controller for optimal battery charging. LCD display with multiple protection features.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
    features: ['MPPT Technology', 'LCD Display', 'Auto Detection', 'Multi-Protection'],
    specifications: {
      maxPV: '150V',
      current: '60A',
      efficiency: '99%',
      battery: '12V/24V/48V Auto'
    }
  },
  {
    id: 7,
    name: 'Battery Pack 15kWh',
    category: 'Battery Storage',
    description: 'High-capacity lithium battery system for larger installations. Expandable and smart grid ready.',
    image: 'https://images.unsplash.com/photo-1609178764845-795e914c8ad0?w=800',
    features: ['15kWh Capacity', 'Expandable', 'Smart BMS', 'Fire Safety'],
    specifications: {
      capacity: '15kWh',
      voltage: '51.2V',
      peakPower: '7.5kW',
      warranty: '15 years'
    }
  },
  {
    id: 8,
    name: 'Portable Solar Kit',
    category: 'Solar Kits',
    description: 'Complete portable solar power system. Perfect for camping, RVs, and emergency backup.',
    image: 'https://images.unsplash.com/photo-1604158606717-4e0ed9b60e3b?w=800',
    features: ['All-in-One', 'Portable Design', '500W System', 'Plug & Play'],
    specifications: {
      panel: '2x100W',
      battery: '40Ah',
      inverter: '500W',
      weight: '15 kg'
    }
  },
  {
    id: 9,
    name: 'Solar Mounting Structure',
    category: 'Mounting',
    description: 'Robust aluminum mounting system for rooftop solar panel installation. Easy assembly and corrosion resistant.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
    features: ['Aluminum Build', 'Adjustable Angle', 'Weather Resistant', 'Easy Install'],
    specifications: {
      material: 'Aluminum Alloy',
      panels: 'Up to 10 panels',
      angle: '15-45 degrees',
      warranty: '20 years'
    }
  }
];

const categories = [
  { id: 1, name: 'Solar Panels', icon: '☀️' },
  { id: 2, name: 'Inverters', icon: '⚡' },
  { id: 3, name: 'Battery Storage', icon: '🔋' },
  { id: 4, name: 'Controllers', icon: '🎛️' },
  { id: 5, name: 'Solar Kits', icon: '📦' },
  { id: 6, name: 'Mounting', icon: '🔧' }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Digital Catalogue API' });
});

// Get all products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = products.filter(p => p.category === category);
    res.json(filtered);
  } else {
    res.json(products);
  }
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Get all categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Contact form submission:', { name, email, phone, message });
  res.json({ success: true, message: 'Thank you for contacting us! We will get back to you soon.' });
});

// Serve React app for all other routes (must be after API routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
