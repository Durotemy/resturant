import "./App.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

import FoodCarousel from "./components/FoodCarousel";
import Product from "./components/Product";

import Navbar from "./components/NavBar";

const searchInputStyle = {
  backgroundColor: "white",
  color: "#1d5811",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

function Home() {
  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Navbar />
      <div className="searchBar">
        <input
          style={searchInputStyle}
          type="text"
          placeholder="Search for food..."
        />
      </div>

      <div className="carousel-container-image">
        <FoodCarousel />
      </div>

      <div>
        <h1 className="enjoy-title">Pick and Enjoy your food</h1>
        <p className="enjoy-food">
          Discover the rich taste of our authentic local cuisine. <br />
          Every bite is a journey into tradition and flavor. <br />
          Come hungry, leave happy — the way food should be.
        </p>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Product />
        </div>
        <ToastContainer />
      </div>

      <div className="footer">
        <p className="footer-text">
          © 2025 FoodApp. All rights reserved.
          <br />
        </p>
      </div>
    </div>
  );
}

export default Home;
