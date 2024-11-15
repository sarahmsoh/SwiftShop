import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`${product.name} added to cart!`);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <NavBar onLogout={onLogout} />}

        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        </Routes>

        <div className="App container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Shop</h1>

          {/* Product List */}
          {products.length > 0 ? (
            <ProductList products={products} onAddToCart={handleAddToCart} />
          ) : (
            <p>Loading products...</p>
          )}

          {/* Cart */}
          <div className="cart mt-12">
            <h3 className="text-2xl font-semibold">Shopping Cart</h3>
            <p>{cart.length} items in your cart</p>
            <ul>
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map((item, index) => (
                  <li key={index} className="mt-2">{item.name} - ${item.price.toFixed(2)}</li>
                ))
              )}
            </ul>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded">Checkout</button>
            </div>
          </div>

          <div className="App">
            <header style={headerStyle}>
              <h1>ShopEasy with us</h1>
            </header>

            <main style={mainContentStyle}>
              <Contact />
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

const headerStyle = {
  backgroundColor: '#2575',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const mainContentStyle = {
  padding: '20px',
  textAlign: 'center',
};

export default App;
