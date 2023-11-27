import React from 'react'
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HiddenMenuBar from "./HiddenMenuBar";
import PortalDrawer from "./PortalDrawer";
import "./MobileApp.css";
import "./global.css"

const MobileApp = () => {
  const navigate = useNavigate();
  const [isHiddenMenuBarOpen, setHiddenMenuBarOpen] = useState(false);

  const onVentigatorFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAIRABLETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
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

  return (
    <>
      <div className="mobile-app">
        <div className="top-bar-frame2">
          <div className="logo2">
            <div
              className="ventigator-frame2"
              onClick={onVentigatorFrameContainerClick}
            >
              <img
                className="ventigator-logo-icon2"
                alt=""
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
            <div className="history6" onClick={onHistoryTextClick}>
              History
            </div>
            <div className="contacts4" onClick={onContactsTextClick}>
              Contacts
            </div>
            <button className="portal-login-frame3">
              <div className="portal-login3">Portal Login</div>
              <img className="vector-icon" alt="" src="/vector-12.svg" />
            </button>
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
              <div className="access-your-health">{`Access your health information instantaneously from anywhere you may be. `}</div>
            </div>
            <button className="btn">
              <b className="download">Download</b>
              <img className="vector-icon1" alt="" src="/vector.svg" />
            </button>
          </div>
          <div className="airableappui1-wrapper">
            <img
              className="airableappui1-icon"
              alt=""
              src="/airableappui1.jpg"
            />
          </div>
          <div className="airableappui1-wrapper">
            <img
              className="airableappui1-icon"
              alt=""
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
