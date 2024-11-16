import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
  const contactRef = useRef(null);
 const cartRef = useRef(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  const handleLogout = () => {
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

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
       <NavBar onLogout={handleLogout} onContactClick={scrollToContact} onCartClick={scrollToCart} />

      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      </Routes>

      <Home />
      <div className="App container mx-auto p-6">
        {/* Product List */}
        {products.length > 0 ? (
          <ProductList products={products} onAddToCart={handleAddToCart} />
        ) : (
          <p>Loading products...</p>
        )}

        {/* Cart */}
        <div ref={cartRef} className="cart mt-12">
          <h3 className="text-2xl font-semibold">Shopping Cart</h3>
          <p>{cart.length} items in your cart</p>
          <ul>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <li key={index} className="mt-2">
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))
            )}
          </ul>
          <div className="mt-4">
          </div>
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
