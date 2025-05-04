import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import { GoHome } from "react-icons/go";
import { SlPhone } from "react-icons/sl";
import { PiAddressBookTabsDuotone } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import ContactModal from "./ContactModal";
import Waitlist from "./Waitlist";
import { useStore } from "../store";

const navLinkStyle = { padding: "0 5px" };

const Navbar = () => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems } = useStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth < 768;

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const openContactModal = () => setContactModalOpen(true);
  const openWaitlistModal = () => setWaitlistModalOpen(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [setScreenWidth]);

  return (
    <>
      <div className={`navBar ${isMenuOpen ? "menuOpen" : ""}`}>
        {!isMenuOpen && <img src={logo} alt="Logo" className="logo" />}

        {isMobile && (
          <button onClick={toggleMenu} className="hamburger">
            {isMenuOpen ? <IoIosClose size={35} /> : <CiMenuFries size={35} />}
          </button>
        )}
        <nav className={isMobile && !isMenuOpen ? "hidden" : ""}>
          <ul>
            <li onClick={() => navigate("/")}>
              <GoHome size={20} />
              <p style={navLinkStyle}>Home</p>
            </li>
            <li onClick={openContactModal}>
              <SlPhone size={20} />
              <p style={navLinkStyle}>Contact</p>
            </li>
            <li onClick={openWaitlistModal}>
              <PiAddressBookTabsDuotone size={20} />
              <p style={navLinkStyle}>Join Waitlist</p>
            </li>

            {isMobile && (
              <>
                <li className="cartIcon" onClick={() => navigate("/cart")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <span className="cartCount">{cartItems.length}</span>
                </li>
                <li className="cartIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </li>
              </>
            )}
          </ul>
        </nav>

        {!isMobile && (
          <div className="navEnd">
            <div className="cartIcon" onClick={() => navigate("/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              <span className="cartCount">{cartItems.length}</span>
            </div>
            <div className="userProfile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {contactModalOpen && (
        <ContactModal
          contactModalOpen={contactModalOpen}
          setContactModalOpen={setContactModalOpen}
        />
      )}

      {waitlistModalOpen && (
        <Waitlist
          waitlistModalOpen={waitlistModalOpen}
          setWaitlistModalOpen={setWaitlistModalOpen}
        />
      )}
    </>
  );
};

export default Navbar;
