import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="product-img"
      />

      <h4>{product.title}</h4>

      {/* short description */}
      <p className="product-desc">
        {product.description.slice(0, 70)}...
      </p>

      {/* price */}
      <p>₹{product.price}</p>

      {/* NEW: stock label (UI only) */}
      <p className="stock-label">In Stock</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      <br />
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductItem;



