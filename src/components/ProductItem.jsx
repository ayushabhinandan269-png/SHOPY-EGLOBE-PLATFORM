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

    {/* Short description */}
    <p className="product-desc">
      {product.description.slice(0, 60)}...
    </p>

    {/* Price */}
    <p className="product-price">₹{product.price}</p>

    {/* Rating & stock */}
    <p className="product-meta">
      ⭐ {product.rating} | In Stock
    </p>

    <button onClick={() => dispatch(addToCart(product))}>
      Add to Cart
    </button>

    <div style={{ marginTop: "8px" }}>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  </div>
);

};

export default ProductItem;



