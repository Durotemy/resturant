import Navbar from "./components/NavBar";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "./store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { toast } from "react-toastify";

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: string;
  count: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const { removeFromCart, cartItems, incrementCount, decrementCount } =
    useStore() as {
      removeFromCart: (item: CartItem) => void;
      cartItems: CartItem[];
      incrementCount: (id: number) => void;
      decrementCount: (id: number) => void;
    };

  const calculateTotal = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + price * item.count;
    }, 0);
  };

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="cartContainerforcart">
        <h1 className="cartitle">
          <IoMdArrowBack
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              marginRight: "30px",
            }}
          />
          Shopping Cart
        </h1>
        <p className="enjoy-food">
          {cartItems.length === 0
            ? "Your cart is empty. Add some delicious items!"
            : `Your cart contains ${cartItems.length} item${
                cartItems.length > 1 ? "s" : ""
              }.`}
        </p>

        {cartItems.length > 0 && (
          <div className="cartItems">
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className="cartItem">
                <div className="cartItem-image-description">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "600px",
                      height: "auto",
                    }}
                  />
                  <p className="cartItem-description">
                    {item.title} - A delicious meal prepared with the finest
                    ingredients. Perfect for any occasion.
                  </p>
                </div>
                <div className="cartItem-info">
                  <p className="cartItem-title">{item.title}</p>
                  <div className="increment-decrement-box">
                    <div className="increment-decrement">
                      <span
                        className="increment-button"
                        onClick={() => incrementCount(item.id)}
                      >
                        <IoIosAdd size={30} />
                      </span>
                      <span className="increment-button">{item.count}</span>
                      <span
                        className="increment-button"
                        onClick={() => decrementCount(item.id)}
                      >
                        <FiMinus size={30} />
                      </span>
                    </div>
                    <p className="cartItem-price">{item.price}</p>
                  </div>
                </div>
                <div className="cartItem-remove">
                  <RiDeleteBin6Line
                    size={30}
                    color={"#228b23"}
                    onClick={() => {
                      removeFromCart(item);
                      toast.info(`${item.title} removed from cart`);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="total-amount">
              <h3>Total Amount:</h3>
              <p className="cartItem-price">
                ₦{calculateTotal().toLocaleString()}
              </p>
            </div>
            <button className="proceed-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
