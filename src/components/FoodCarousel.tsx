import React from "react";
import "./FoodCarousel.css";
import AssortedMeatPepperSoup from "../assets/svg/AssortedMeatPepperSoup.svg";
import ayamase from "../assets/svg/ayamase.svg";
import BukaStew from "../assets/svg/BukaStew.svg";
import coconutCury from "../assets/svg/cocunutCury.svg";
// import eforiro from "../assets/svg/eforiro.svg";
// import friedRice from "../assets/svg/friedRice.svg";
// import goatMeat from "../assets/svg/goatMeat.svg";
// import jollofRice from "../assets/svg/JollofRice.svg";
// import ofadaStew from "../assets/svg/OfadaStew.svg";
import turkey from "../assets/svg/Turkey.svg";
import whiteRice from "../assets/svg/whiteRice.svg";

const foodImages = [
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
];

const FoodCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {foodImages.map((food) => (
          <div key={food.id} className="carousel-slide">
            <img src={food.image} alt={food.title} />
            <div className="slide-content">
              <h3>{food.title}</h3>
            </div>
          </div>
        ))}
        {foodImages.map((food) => (
          <div key={`duplicate-${food.id}`} className="carousel-slide">
            <img src={food.image} alt={food.title} loading="lazy" />
            <div className="slide-content">
              <h3>{food.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
