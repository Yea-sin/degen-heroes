import React, { useState } from "react";
import Social from "../Social/Social";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-container">
      <div className={isOpen ? "header-items active" : "header-items"}>
        <div
          onClick={() => handleToggle()}
          className={isOpen ? "menu-close" : "menu-open"}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </div>
        <div className={`${isOpen ? "nav-menu active" : "nav-menu"}`}>
          <a href="/">about</a>
          <a href="/">heroes</a>
          <a href="/">roadmaps</a>
          <a href="/">founders</a>
          <a href="/">faqs</a>
          <button className="common-btn wallet-btn-active">
            <div className="btn-style wallet-style">connect wallet</div>
          </button>
          <Social />
        </div>
        <button
          className={
            isOpen
              ? "common-btn wallet-btn-none"
              : "visibility common-btn wallet-btn-active"
          }
        >
          <div className="btn-style">connect wallet</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
