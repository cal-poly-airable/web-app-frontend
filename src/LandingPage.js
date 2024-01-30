/* eslint-disable react/no-unescaped-entities */
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
          <div className="logo">
            <a className="ventigator-frame3">
              <img
                className="ventigator-logo-icon"
                alt="Ventigator Alligator Logo"
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
            <div className="gen-description">
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
              alt="Ventilator Prototype"
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
          <div className="services">{`Our team is dedicated to staying at the forefront of respiratory technology. We regularly update Ventigator's firmware and software to introduce new features and improvements. In the unlikely event of any device issues, our dedicated support team ensures a swift resolution. Users can rest assured that their respiratory care will remain uninterrupted. We also recognize the importance of collaboration with healthcare professionals. Airable partners with healthcare providers to integrate Ventigator into patient care plans. Ventigator integrates connectivity options, enabling patients and healthcare providers to monitor patient vitals and track user patterns through their web portal.`}</div>
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
                  <div className="steps-container">
                    <p className="steps">
                    Before embarking on your respiratory care journey with Ventigator, initiate the process by reaching out to us directly or consulting your healthcare provider. Our team is ready to provide personalized guidance, ensuring the optimal setup and usage based on your individual needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="step1outer">
                <div className="steps1-frame">
                  <div className="steps-container">
                    <p className="steps">
                    Upon contact, you will receive your Ventigator device along with detailed instructions for activation. 
                    The process involves linking your smartwatch's vitals to the Ventigator mobile app. 
                    Through this integration, your smartwatch continuously monitors vital signs, such as heart rate and oxygen saturation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="step1outer">
                <div className="steps1-frame">
                  <div className="steps-container">
                    <p className="steps">
                    Explore your historical data and trends provided by our website portal and mobile app. 
                    Share your data seamlessly with your healthcare provider, ensuring that your healthcare team remains informed about your respiratory health.
                    For any questions or assistance during these steps, our support team is just a message away.
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
