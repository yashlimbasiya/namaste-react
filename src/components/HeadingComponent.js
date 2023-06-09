import React from "react";
import { useState } from "react";
import Logo from "../assets/img/logo.webp";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const HeadingComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector( store => store.cart.items)
  console.log(cartItems)

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/InstaMart">InstaMart</Link>
          </li>
          <li>
            <Link to="/cart">Cart{cartItems.length}</Link>
          </li>
          <li>{isOnline ? "🟢" : "🔴"}</li>
          {loggedIn ? (
            <button
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
