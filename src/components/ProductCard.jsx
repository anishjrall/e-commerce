import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const handleAddToCart = () => {
    if (isLoggedIn) {
            

      dispatch(addToCart(product));
      toast.success("Product added to cart!");
    }
    else {
      navigate("/login")
      toast.info("Login to add to cart")
    }
  };

  const gotoitem = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <img
        onClick={gotoitem}
        src={product.image}
        alt={product.title}
        style={{ cursor: "pointer" }}
      />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
