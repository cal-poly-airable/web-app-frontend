import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignUpWindow from "./SignUpWindow";
import PortalPopup from "./PortalPopup";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./LandingPage.css";
import "./global.css";

const LandingPage = () => {
  const [isSignUpWindowOpen, setSignUpWindowOpen] = useState(false);
  const navigate = useNavigate();
  const [isHiddenMenuBarOpen, setHiddenMenuBarOpen] = useState(false);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingPageContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  //Pretty redundant, but its necessary for dropdown to work and won't work when referencing event listener
  const onAppClick = useCallback(() => {
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

  const openSignUpWindow = useCallback(() => {
    setSignUpWindowOpen(true);
  }, []);

  const closeSignUpWindow = useCallback(() => {
    setSignUpWindowOpen(false);
  }, []);

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

  return (
    <>
      <div className="landing-page" data-scroll-to="landingPageContainer">
        <nav className="top-bar-frame3">
          <div className="logo3">
            <a className="ventigator-frame3">
              <img
                className="ventigator-logo-icon3"
                alt=""
                src="/ventigatorlogo.png"
              />
            </a>
            <div className="frame5">
              <b className="airable3">AIRABLE</b>
            </div>
          </div>
          <div className="top-nav4">
            <b className="home4" onClick={onHomeTextClick}>
              Home
            </b>
            <div className="app4" onClick={onAppClick}>
              App
            </div>
            <div className="history7" onClick={onHistoryTextClick}>
              History
            </div>
            <div className="contacts5" onClick={onContactsTextClick}>
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
          <button className="hamburger-menu3" onClick={openHiddenMenuBar}>
            <div className="hamburger-menu-child6" />
            <div className="hamburger-menu-child7" />
            <div className="hamburger-menu-child6" />
          </button>
        </nav>
        <div className="description-frame">
          <div className="header-text">
            <b className="wearable-ventilator">Wearable Ventilator</b>
            <div className="general-description-of">
            At Airable, our mission is to better the lives of those with respiratory challenges. We are proud to introduce Ventigator, our new cutting-edge, wearable ventilator system. 
            Designed with portability in mind, the Ventigator combines lightweight materials with a compact construction to ensure patients can receive optimal respiratory support wherever life takes them. 
            A robust battery guarantees extended use, providing peace of mind for users on the road. 
            </div>
            <button className="consult-btn" onClick={openSignUpWindow}>
              <b className="sign-up-now">SIGN UP NOW</b>
            </button>
          </div>
          <div className="ventilator-image-wrapper">
            <img
              className="ventilator-image-icon"
              alt=""
              src="/ventilatorimage.jpg"
            />
          </div>
        </div>
        <div className="line-under-header">
          <hr className="line-under-header1" />
        </div>
        <div className="services-frame">
          <b className="our-services">Our services</b>
          <div className="line-frame3">
            <div className="line-frame-child1" />
          </div>
          <div className="services">{`Explain more about the benefits of using the ventilator and what other features it has/can do. `}</div>
        </div>
        <div className="how-it-works-frame">
          <div className="how-it-works-parent">
            <b className="how-it-works">How it works</b>
            <div className="line-frame4">
              <div className="line-frame-child2" />
            </div>
            <div className="steps-frame">
              <div className="step1outer">
                <div className="steps1-frame">
                  <div className="hist-ory-h-container">
                    <p className="hist-ory-h">
                      HIST ORY H I STORYHISTOR YHIS TORY HIS TORY HIST ORY HIST
                      ORYHI STO RYHI STO RYH I S TORY H I S T ORYHI STOR YHISTO
                      RYHISTO R Y H I S TORYHISTO RYHIST ORYHIS TORYHISTO
                      RYHISTORY
                    </p>
                  </div>
                </div>
              </div>
              <div className="step1outer">
                <div className="steps1-frame">
                  <div className="hist-ory-h-container">
                    <p className="hist-ory-h">
                      HIST ORY H I STORYHISTOR YHIS TORY HIS TORY HIST ORY HIST
                      ORYHI STO RYHI STO RYH I S TORY H I S T ORYHI STOR YHISTO
                      RYHISTO R Y H I S TORYHISTO RYHIST ORYHIS TORYHISTO
                      RYHISTORY
                    </p>
                  </div>
                </div>
              </div>
              <div className="step1outer">
                <div className="steps1-frame">
                  <div className="hist-ory-h-container">
                    <p className="hist-ory-h">
                      HIST ORY H I STORYHISTOR YHIS TORY HIS TORY HIST ORY HIST
                      ORYHI STO RYHI STO RYH I S TORY H I S T ORYHI STOR YHISTO
                      RYHISTO R Y H I S TORYHISTO RYHIST ORYHIS TORYHISTO
                      RYHISTORY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img className="gator-1-icon" alt="" src="/gator-1@2x.png" />
          </div>
        </div>
        <div className="gator-frame" />
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
      {isSignUpWindowOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpWindow}
        >
          <SignUpWindow onClose={closeSignUpWindow} />
        </PortalPopup>
      )}
    </>
  );
};

export default LandingPage;
