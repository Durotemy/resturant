import React from "react";
import "./Waitlist.css";
import { IoIosClose } from "react-icons/io";

interface WaitlistModalProps {
  WaitlistModalOpen: boolean;
  setWaitlistModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Waitlist = ({
  WaitlistModalOpen,
  setWaitlistModalOpen,
}: WaitlistModalProps) => {
  return (
    <div className={`modal ${WaitlistModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Waitlist Open</h2>
          <IoIosClose
            size={40}
            color={"#228b23"}
            onClick={() => setWaitlistModalOpen(false)}
          />
        </div>
        <div className="modal-body">
          <p>
            We are currently in the waitlist for our next event. If you are
            interested in joining, please fill out the form below and we will
            contact you shortly.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
