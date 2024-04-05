import React, { useState } from "react";
import "./XModal.css";

export default function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !dob) {
      setError("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid email. Please check your email address.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const currentDate = new Date();
    const inputDate = new Date(dob);
    if (inputDate > currentDate) {
      setError("Invalid date of birth. Please enter a valid date.");
      return;
    }
    // Process the form data
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
    setError("");
    setIsOpen(false);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
