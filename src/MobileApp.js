import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./MobileApp.css";
import "./global.css";

const MobileApp = () => {
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
      <div className="mobile-app">
        <div className="top-bar-frame2">
          <div className="logo">
            <div
              className="ventigator-frame2"
              onClick={onVentigatorFrameContainerClick}
            >
              <img
                className="ventigator-logo-icon2"
                alt="Ventigator Alligator Logo"
                src="/ventigatorlogo.png"
              />
            </div>
            <div className="frame3">
              <b className="airable2" onClick={onAIRABLETextClick}>
                AIRABLE
              </b>
            </div>
          </div>
          <div className="top-nav3">
            <div className="home3" onClick={onHomeTextClick}>
              Home
            </div>
            <b className="app3">App</b>
            <div className="history" onClick={onHistoryTextClick}>
              History
            </div>
            <div className="contacts" onClick={onContactsTextClick}>
              Contacts
            </div>
            <div className="dropdown" data-dropdown>
              <button className="link-portal" data-dropdown-button>
                <div className="link-portal-child" data-dropdown-button>Portal Login</div>
                <img
                  className="vector-link"
                  src="/vector-12.svg"
                />
              </button>
              <div className="dropdown-menu information-grid">
                <div>
                  <div className="dropdown-links">
                    <a
                      href="https://airable.auth.us-east-1.amazoncognito.com/login?client_id=1ffva6aqq4sqvtj7b3hv191q1p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/patient"
                      className="link"
                    >
                      Patient Login
                    </a>
                    <a
                      href="https://airablehealth.auth.us-east-1.amazoncognito.com/login?client_id=14jsmal0gq1k85nqunpjnvjv6p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/healthcare"
                      className="link"
                    >
                      Provider Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="hamburger-menu2" onClick={openHiddenMenuBar}>
            <div className="hamburger-menu-child3" />
            <div className="hamburger-menu-child4" />
            <div className="hamburger-menu-child3" />
          </button>
        </div>
        <div className="download-our-mobile-apps">
          <div className="frame4">
            <b className="download-our-mobile-container">
              <p className="download-our">{`Download our `}</p>
              <p className="download-our">mobile app</p>
            </b>
            <div className="line-frame2">
              <div className="line-frame-inner" />
            </div>
            <div className="text-frame1">
              <div className="access-your-health">Access your health information instantaneously from anywhere you may be. Our user-friendly mobile interface will let you take control of your respiratory health with ease.</div>
            </div>
            <button className="btn">
              <b className="download">Download</b>
              <img className="vector-icon1" src="/vector.svg" />
            </button>
          </div>
          <div className="airableappui1-wrapper">
            <img
              className="airableappui1-icon"
              alt="Airable App Home Page"
              src="/airableappui1.jpg"
            />

            <img
              className="airableappui1-icon"
              alt="Airable App Bluetooth Pairing"
              src="/airableappui2.jpg"
            />
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

export default MobileApp;
