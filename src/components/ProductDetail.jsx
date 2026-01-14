import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // ✅ ADDED

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load product");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <div className="product-detail">
        <div className="product-detail-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h2>{product.title}</h2>

          <p className="product-detail-desc">
            {product.description}
          </p>

          <p className="product-detail-price">₹{product.price}</p>

          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p className="stock-label">Availability: In Stock</p>

          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

