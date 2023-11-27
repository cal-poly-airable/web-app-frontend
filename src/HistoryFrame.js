import React from 'react'
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
                src="/ventigatorlogo@2x.png"
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
            <button className="portal-login-frame">
              <div className="portal-login">Portal Login</div>
              <img
                className="portal-login-frame-child"
                alt=""
                src="/vector-12.svg"
              />
            </button>
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
                src="/ventilator-v1@2x.png"
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
                src="/ventilator-v2@2x.png"
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
                src="/ventilator-v3@2x.png"
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
