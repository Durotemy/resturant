import React, { useState } from "react";
import { toast } from "react-toastify";

import "./Product.css";
import { IoIosAdd } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStore } from "../store";

import AssortedMeatPepperSoup from "../assets/svg/AssortedMeatPepperSoup.svg";
import ayamase from "../assets/svg/ayamase.svg";
import BukaStew from "../assets/svg/BukaStew.svg";
import coconutCury from "../assets/svg/cocunutCury.svg";
import eforiro from "../assets/svg/eforiro.svg";
import friedRice from "../assets/svg/friedRice.svg";
import goatMeat from "../assets/svg/goatMeat.svg";
import jollofRice from "../assets/svg/JollofRice.svg";
import ofadaStew from "../assets/svg/OfadaStew.svg";
import turkey from "../assets/svg/Turkey.svg";
import whiteRice from "../assets/svg/whiteRice.svg";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

interface CartItem extends Product {
  count: number;
}

const products: Product[] = [
  {
    id: 1,
    image: AssortedMeatPepperSoup,
    title: "Assorted Meat & Pepper Soup",
    price: "$140",
  },
  {
    id: 2,
    image: ayamase,
    title: "Ayamase",
    price: "$120",
  },
  {
    id: 3,
    image: BukaStew,
    title: "Assorted Bukka Stew",
    price: "$120",
  },
  {
    id: 4,
    image: whiteRice,
    title: "White rice",
    price: "$30",
  },
  {
    id: 5,
    image: turkey,
    title: "Peppered Turkey",
    price: "$100",
  },
  {
    id: 6,
    image: coconutCury,
    title: "Coconut Chicken Curry",
    price: "$80",
  },
  {
    id: 10,
    image: eforiro,
    title: "Efo Riro",
    price: "$120",
  },
  {
    id: 11,
    image: friedRice,
    title: "Fried Rice",
    price: "$70",
  },
  {
    id: 12,
    image: goatMeat,
    title: "Goat Meat",
    price: "$150",
  },
  {
    id: 13,
    image: jollofRice,
    title: "Jollof Rice",
    price: "$60",
  },
  {
    id: 7,
    image: ofadaStew,
    title: "Ofada Sauce",
    price: "$120",
  },
];

const Product: React.FC = () => {
  const { addToCart } = useStore() as {
    removeFromCart: (item: CartItem) => void;
    cartItems: CartItem[];
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void;
    addToCart: (item: CartItem) => void;
  };
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const notify = (item: Product) => {
    toast(`${item.title} successfully added to cart`);
    addToCart({ ...item, count: 1 });
  };

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
              {!loadedImages[product.id] && (
                <div className="image-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <img
                src={product.image}
                alt={product.title}
                onLoad={() => handleImageLoad(product.id)}
                style={{
                  opacity: loadedImages[product.id] ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
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
