import React from "react";
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./HistoryFrame.css";
import "./global.css";

const HistoryFrame = () => {
  const navigate = useNavigate();
  const [isHiddenMenuBarOpen, setHiddenMenuBarOpen] = useState(false);

  const onVentigatorFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAIRABLETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppTextClick = useCallback(() => {
    navigate("/app");
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    navigate("/contacts");
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
            <Link
              className="ventigator-frame"
              to="/"
              onClick={onVentigatorFrameClick}
            >
              <img
                className="ventigator-logo-icon"
                alt=""
                src="/ventigatorlogo.png"
              />
            </Link>
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
            <b className="history">History</b>
            <div className="contacts" onClick={onContactsTextClick}>
              Contacts
            </div>
            <div className="dropdown" data-dropdown>
              <button className="link-portal" data-dropdown-button>
                <div className="link-portal-child" data-dropdown-button>Portal Login</div>
                <img
                  className="vector-link"
                  alt=""
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
          <button className="hamburger-menu" onClick={openHiddenMenuBar}>
            <div className="hamburger-menu-child" />
            <div className="hamburger-menu-item" />
            <div className="hamburger-menu-child" />
          </button>
        </div>
        <div className="history-frame1">
          <b className="history1">History</b>
          <div className="line-frame">
            <div className="line-frame-child" />
          </div>
          <div className="history-images-frame">
            <div className="v1-frame">
              <img
                className="ventilator-v1-icon"
                alt=""
                src="/ventilator-v1.jpg"
              />
              <div className="history11">
                History History History History History History History History
                History
              </div>
            </div>
            <div className="v1-frame">
              <img
                className="ventilator-v1-icon"
                alt=""
                src="/ventilator-v2.jpg"
              />
              <div className="history11">
                History History History History History History History History
                History
              </div>
            </div>
            <div className="v1-frame">
              <img
                className="ventilator-v1-icon"
                alt=""
                src="/ventilator-v3.jpg"
              />
              <div className="history11">
                History History History History History History History History
                History
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

export default HistoryFrame;
