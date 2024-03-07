/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./HistoryFrame.css";
import "./global.css";
import LoginDropdown from "./LoginDropdown";

const HistoryFrame = () => {
  const navigate = useNavigate();
  const [isHiddenMenuBarOpen, setHiddenMenuBarOpen] = useState(false);

  const onVentigatorFrameClick = useCallback(() => {
    navigate("/");
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null){
        return;
      }
  
      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
  
      document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
      });
    });
  }, [navigate]);

  const onAIRABLETextClick = useCallback(() => {
    navigate("/");
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null){
        return;
      }
  
      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
  
      document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
      });
    });
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null){
        return;
      }
  
      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
  
      document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
      });
    });
  }, [navigate]);

  const onAppTextClick = useCallback(() => {
    navigate("/app");
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null){
        return;
      }
  
      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
  
      document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
      });
    });
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    navigate("/contacts");
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null){
        return;
      }
  
      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
  
      document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
      });
    });
  }, [navigate]);

  const openHiddenMenuBar = useCallback(() => {
    setHiddenMenuBarOpen(true);
  }, []);

  const closeHiddenMenuBar = useCallback(() => {
    setHiddenMenuBarOpen(false);
  }, []);

  document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });

  return (
    <>
      <div className="history-frame">
        <div className="top-bar-frame">
          <div className="logo">
            <div
              className="ventigator-frame"
              to="/"
              onClick={onVentigatorFrameClick}
            >
              <img
                className="ventigator-logo-icon"
                alt="Ventigator Alligator Logo"
                src="/ventigatorlogo.png"
              />
            </div>
            <div className="frame">
              <b className="airable" onClick={onAIRABLETextClick}>
                AIRABLE
              </b>
            </div>
          </div>
          <div className="top-nav">
            <div className="home" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="app" onClick={onAppTextClick}>
              App
            </div>
            <b className="history-og">History</b>
            <div className="contacts" onClick={onContactsTextClick}>
              Contacts
            </div>
            <div className="dropdown" data-dropdown>
              <button className="link-portal" data-dropdown-button>
                <div className="link-portal-child" data-dropdown-button>Portal Login</div>
                <img className="vector-link" alt="Login Window" src="/vector-12.svg" />
              </button>
            <LoginDropdown />
            </div>
          </div>
          <button className="hamburger-menu" onClick={openHiddenMenuBar}>
            <div className="hamburger-menu-child-top-bot" />
            <div className="hamburger-menu-child-mid" />
            <div className="hamburger-menu-child-top-bot" />
          </button>
        </div>
        <div className="history-frame1">
          <b className="history1">History</b>
          <div className="line-frame">
            <div className="line-frame-child" />
          </div>
          <div className="history-images-frame">
            <div className="v1-frame">
              <img className="ventilator-v1-icon" alt="First version of ventilator" src="/ventilator-v1.jpg" />
              <div className="history-description">
              Ventigator I marks the inception of our ventilator series. With an emphasis on essential features, Ventigator I set the foundation for subsequent models in this series. It featured a high-pressure bottled O2 system and a core processing unit powered by Raspberry Pi.
              </div>
            </div>
            <div className="v1-frame">
              <img className="ventilator-v1-icon" alt="Second version of ventilator" src="/ventilator-v2.jpg" />
              <div className="history-description">
              Building upon the success of its predecessor, Ventigator II integrated a new oxygen concentrator, offering a more sustainable and efficient oxygen supply. A more advanced Raspberry Pi processing unit enabled improved control over respiratory parameters. 
              </div>
            </div>
            <div className="v1-frame">
              <img className="ventilator-v1-icon" alt="Third version of ventilator" src="/ventilator-v3.jpg" />
              <div className="history-description">
              Designed for portability and durability, Ventigator III's new carrying case provided added protection for safety during travel and everyday use. A new adaptive O2 concentrator allowed for adjustable oxygen concentration based on real-time user needs.
              </div>
            </div>
          </div>
        </div>
      </div>
      {isHiddenMenuBarOpen && (
        <PortalDrawer overlayColor="rgba(113, 113, 113, 0.3)" placement="Right" onOutsideClick={closeHiddenMenuBar}>
          <HiddenMenuBar onClose={closeHiddenMenuBar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HistoryFrame;
