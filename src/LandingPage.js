import React from 'react'
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpWindow from "./SignUpWindow";
import PortalPopup from "./PortalPopup";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./LandingPage.css";
import "./global.css"


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

  const onAppClick = useCallback(() => {
    navigate("/app");
  }, [navigate]);

  const onHistoryTextClick = useCallback(() => {
    navigate("/history");
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

  const openSignUpWindow = useCallback(() => {
    setSignUpWindowOpen(true);
  }, []);

  const closeSignUpWindow = useCallback(() => {
    setSignUpWindowOpen(false);
  }, []);

  return (
    <>
      <div className="landing-page" data-scroll-to="landingPageContainer">
        <nav className="top-bar-frame3">
          <div className="logo3">
            <a className="ventigator-frame3">
              <img
                className="ventigator-logo-icon3"
                alt=""
                src="/ventigatorlogo1@2x.png"
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
            <Link className="app4" onClick={onAppClick}>
              App
            </Link>
            <div className="history7" onClick={onHistoryTextClick}>
              History
            </div>
            <div className="contacts5" onClick={onContactsTextClick}>
              Contacts
            </div>
            <button className="portal-login-frame4">
              <div className="portal-login4">Portal Login</div>
              <img
                className="portal-login-frame-child1"
                alt=""
                src="/vector-12.svg"
              />
            </button>
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
              General description of the current version of the project and who
              the ventilator is catered towards.
            </div>
            <button className="consult-btn" onClick={openSignUpWindow}>
              <b className="sign-up-now">SIGN UP NOW</b>
            </button>
          </div>
          <div className="ventilator-image-wrapper">
            <img
              className="ventilator-image-icon"
              alt=""
              src="/ventilatorimage@2x.png"
            />
          </div>
        </div>
        <div className="line-under-header">
          <img
            className="line-under-header1"
            alt=""
            src="/line-under-header1.svg"
          />
        </div>
        <div className="services-frame">
          <b className="our-services">Our services</b>
          <div className="line-frame3">
            <div className="line-frame-child1" />
          </div>
          <div className="explain-more-about">{`Explain more about the benefits of using the ventilator and what other features it has/can do. `}</div>
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