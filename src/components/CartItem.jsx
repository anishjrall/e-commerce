export default function CartItem({ item, removeItem }) {
  return (
    <div className="cart-items">
      <img src={item.image} alt={item.title} />
      
      <p>Quantity: {item.quantity}</p>
      <p>
        {item.title} - Rs {item.price * item.quantity}
      </p>

      <button
        className="remove-item"
        onClick={() => removeItem(item.id)}
      >
        Remove Item
      </button>
    </div>
  );
}
