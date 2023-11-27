import React from 'react'
import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HiddenMenuBar.css";
import "./global.css"

const HiddenMenuBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onVentigatorLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppClick = useCallback(() => {
    navigate("/app");
  }, [navigate]);

  const onHistoryClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    navigate("/contacts");
  }, [navigate]);

  return (
    <div className="hidden-menu-bar" data-animate-on-scroll>
      <div className="top-nav1">
        <Link
          className="ventigator-logo"
          to="/"
          onClick={onVentigatorLogoClick}
        />
        <Link className="home1" onClick={onHomeClick}>
          Home
        </Link>
        <Link className="home1" onClick={onAppClick}>
          App
        </Link>
        <Link className="history4" onClick={onHistoryClick}>
          History
        </Link>
        <div className="contacts1" onClick={onContactsTextClick}>
          Contacts
        </div>
        <button className="portal-login-frame1">
          <div className="portal-login1">Portal Login</div>
          <img
            className="portal-login-frame-item"
            alt=""
            src="/vector-11.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default HiddenMenuBar;
