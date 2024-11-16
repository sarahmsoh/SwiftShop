import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, description, rating, image } = product;

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <div className="product-image">
          <img
            src={image || "https://via.placeholder.com/400x300"}
            alt={name}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <div className="product-info mt-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="rating flex items-center">
            <span className="text-yellow-400 mr-2">⭐</span> <span>{rating}</span>
          </div>
          <p className="text-xl font-bold text-green-600">${price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center"
        >
          <span className="mr-2">🛒</span> Add to Cart
        </button>
      </div>

      <style jsx>{`
        .product-card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50vh; /* Full height of the viewport */
          background-color: #f7fafc; /* Light background for contrast */
          margin-bottom: 60px
        }

        .product-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px; /* Set a max-width for the product card */
        }

        .product-image img {
          width: 100%;
          height: 200px; /* Adjust height */
          object-fit: cover;
          border-radius: 8px;
        }

        .product-info {
          margin-top: 16px;
        }

        .product-info h3 {
          font-size: 1.125rem; /* Text size for product name */
          font-weight: 600;
        }

        .product-info p {
          color: #4a5568; /* Dark gray text for description */
        }

        .rating {
          display: flex;
          align-items: center;
        }

        .rating span {
          margin-left: 8px;
        }

        .product-info .text-xl {
          font-size: 1.25rem; /* Larger text for price */
          color: #38a169; /* Green for price */
        }

        button {
          margin-top: 16px;
          width: 100%;
          background-color: #3182ce;
          color: white;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #2b6cb0;
        }

        button .mr-2 {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
