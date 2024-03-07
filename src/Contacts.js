import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./Contacts.css";
import "./global.css";
import LoginDropdown from "./LoginDropdown";

const Contacts = () => {
  const navigate = useNavigate();
  const [isHiddenMenuBarOpen, setHiddenMenuBarOpen] = useState(false);

  const onVentigatorFrameContainerClick = useCallback(() => {
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

  const onHistoryTextClick = useCallback(() => {
    navigate("/history");
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
      <div className="contacts-frame">
        <div className="top-bar-frame1">
          <div className="logo">
            <div
              className="ventigator-frame1"
              onClick={onVentigatorFrameContainerClick}
            >
              <img
                className="ventigator-logo-icon"
                alt="Ventigator Alligator Logo"
                src="/ventigatorlogo.png"
              />
            </div>
            <div className="frame1">
              <b className="airable1" onClick={onAIRABLETextClick}>
                AIRABLE
              </b>
            </div>
          </div>
          <div className="top-nav2">
            <div className="home2" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="app2" onClick={onAppTextClick}>
              App
            </div>
            <div className="history" onClick={onHistoryTextClick}>
              History
            </div>
            <b className="contacts3">Contacts</b>
            <div className="dropdown" data-dropdown>
              <button className="link-portal" data-dropdown-button>
                <div className="link-portal-child" data-dropdown-button>Portal Login</div>
                <img
                  className="vector-link"
                  alt="Login Window"
                  src="/vector-12.svg"
                />
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
        <div className="contact-us-frame">
          <div className="frame2">
            <b className="contact-us">Contact Us</b>
            <div className="line-frame1">
              <div className="line-frame-item" />
            </div>
            <div className="text-frame">
              <div className="text-container">
                <p className="if-you-are-experiencing-a-medi">
                  <span>
                    <span className="if-you-are">
                      If you are experiencing a medical emergency, please call
                      911 or visit your local emergency room.
                    </span>
                  </span>
                </p>
                <p className="if-you-are-experiencing-a-medi">
                  <span>
                    <span className="if-you-are">&nbsp;</span>
                  </span>
                </p>
                <p className="if-you-are-experiencing-a-medi">
                  <span>
                    <span className="if-you-are">{`For general questions or concerns, please contact us at `}</span>
                    <span className="cpairablegmailcom">
                      cpairable@gmail.com
                    </span>
                    <span className="if-you-are">
                      <span className="span1">.</span>
                    </span>
                  </span>
                </p>
                <p className="blank-line2">
                  <span>
                    <span className="if-you-are">
                      <span>&nbsp;</span>
                    </span>
                  </span>
                </p>
                <p className="available-times">
                  <span className="if-you-are">
                    <span>
                      <span>Available Mon-Fri, 8am - 4pm PST</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isHiddenMenuBarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeHiddenMenuBar}
        >
          <HiddenMenuBar onClose={closeHiddenMenuBar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Contacts;
