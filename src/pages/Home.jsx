import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Welcome to MyStore 🛒</h1>
        <p>Your one-stop shop for amazing products. Explore our collection now!</p>
        <button onClick={() => navigate("/products")}>Browse Products</button>
      </div>
    </div>
  );
}
