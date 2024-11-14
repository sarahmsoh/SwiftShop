import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header style={headerStyle}>
        <h1>ShopEasy with us</h1>
      </header>

      <main style={mainContentStyle}>

        <Contact />
      </main>

      <Footer />
    </div>
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
