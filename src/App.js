import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import HistoryFrame from "./HistoryFrame";
import Contacts from "./Contacts";
import MobileApp from "./MobileApp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/history":
        title = "";
        metaDescription = "";
        break;
      case "/contacts":
        title = "";
        metaDescription = "";
        break;
      case "/app":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/history" element={<HistoryFrame />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/app" element={<MobileApp />} />
    </Routes>
  );
}
export default App;
