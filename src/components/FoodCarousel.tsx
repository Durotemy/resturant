import React from "react";
import "./FoodCarousel.css";
import food1 from "../assets/svg/food1.svg";
import food2 from "../assets/svg/food2.svg";
import food3 from "../assets/svg/food3.svg";
import food4 from "../assets/svg/food4.svg";
import bukkerStew from "../assets/svg/Buka-Stew.svg";
import turkey from "../assets/svg/Turkeyrt.svg";

const foodImages = [
  {
    id: 1,
    image: food1,

    title: "Assorted Meat & Pepper Soup",
  },
  {
    id: 2,
    image: food2,

    // "https://images.unsplash.com/photo-1565299507177-b6ac87910f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "Efo riro",
  },
  {
    id: 3,
    image: food3,
    // "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "Soup",
  },
  {
    id: 4,
    image: food4,
    // "https://images.unsplash.com/photo-1565299507177-b6ac87910f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "White rice  ",
  },
  {
    id: 5,
    image: turkey,
    // "https://images.unsplash.com/photo-1565299507177-b6ac87910f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "Turkey ",
  },
  {
    id: 6,
    image: bukkerStew,
    // "https://images.unsplash.com/photo-1565299507177-b6ac87910f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "Bukker Stew ",
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
            <img src={food.image} alt={food.title} />
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
