import React from "react";
import { toast } from "react-toastify";

import "./Product.css";
import { IoIosAdd } from "react-icons/io";

import food1 from "../assets/svg/food1.svg";
import food2 from "../assets/svg/food2.svg";
import food3 from "../assets/svg/food3.svg";
import food4 from "../assets/svg/food4.svg";
import food5 from "../assets/svg/food5.svg";
import food6 from "../assets/svg/food6.svg";
import food7 from "../assets/svg/food7.svg";
import turkey from "../assets/svg/Turkeyrt.svg";
import bukkerStew from "../assets/svg/Buka-Stew.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStore } from "../store";

const products = [
  {
    id: 1,
    image: food1,
    title: "Assorted Meat & Pepper Soup",
    price: "₦2,500",
  },
  {
    id: 2,
    image: food2,
    title: "Efo riro",
    price: "₦1,800",
  },
  {
    id: 3,
    image: food3,
    title: "Soup",
    price: "₦2,000",
  },
  {
    id: 4,
    image: food4,
    title: "White rice",
    price: "₦1,500",
  },
  {
    id: 5,
    image: turkey,
    title: "Turkey",
    price: "₦3,000",
  },
  {
    id: 6,
    image: bukkerStew,
    title: "Bukker Stew",
    price: "₦2,200",
  },
  {
    id: 10,
    image: food5,
    title: "Rice",
    price: "₦2,200",
  },
  {
    id: 11,
    image: food6,
    title: "Nice Meal",
    price: "₦2,200",
  },
  {
    id: 12,
    image: food7,
    title: "Awesome dish",
    price: "₦2,200",
  },
  {
    id: 13,
    image: bukkerStew,
    title: "Stew",
    price: "₦2,200",
  },
  {
    id: 7,
    image: food4,
    title: "White rice",
    price: "₦1,500",
  },
  {
    id: 9,
    image: turkey,
    title: "Turkey",
    price: "₦3,000",
  },
  {
    id: 8,
    image: bukkerStew,
    title: "Bukker Stew",
    price: "₦2,200",
  },
];

const Product: React.FC = () => {
  const { addToCart, removeFromCart, cartItems } = useStore();
  const notify = (item: unknown) => {
    toast(item.title + " successfully added to cart");
    console.log(item);
    addToCart(item);
  };

  console.log("we are here and it work", cartItems);

  AOS.init({
    once: false,
    mirror: true,
    offset: 100,
    duration: 800,
    easing: "ease-out-cubic",
    delay: 100,
    anchorPlacement: "top-bottom",
    disable: "mobile",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    useClassNames: true,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
  });

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <div>
                <p className="product-title">{product.title}</p>
                <p className="price">{product.price}</p>
              </div>
              <div className="cartContainer" onClick={() => notify(product)}>
                <IoIosAdd size={30} color={"#228b23"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
