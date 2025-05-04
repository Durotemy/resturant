import React, { useState } from "react";
import "./ContactModal.css";
import { IoIosClose } from "react-icons/io";

interface ContactModalProps {
  contactModalOpen: boolean;
  setContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal = ({
  contactModalOpen,
  setContactModalOpen,
}: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const input = e.target.value;
    const { value } = e.target;

    // const numberInput = input.replace(/[^0-9]/g, "");
    const numericValue = value.replace(/[^0-9]/g, "");
    setFormData({ ...formData, phone: numericValue });
    // if (input.length > 0 && numberInput.length === 10) {
    //   setFormData({ ...formData, [e.target.name]: numberInput });
    // }
  };

  return (
    <div className={`modal ${contactModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Contact Us</h2>
          <IoIosClose
            size={40}
            color={"#228b23"}
            onClick={() => setContactModalOpen(false)}
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                name="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                // onChange={(e) =>
                //   setFormData({ ...formData, phone: e.target.value })
                // }
                type="text"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                value={formData.message}
                name="message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.message
              }
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
