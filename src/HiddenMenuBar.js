import React from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HiddenMenuBar.css";
import "./global.css";

///////////////////////////////////////////////////////////////////////////
//          Hidden Menu bar used in all landing pages.
//          Used for when screen width is smaller than 900px (set in css files)
//          Primarily geared toward phone and tablet screens
///////////////////////////////////////////////////////////////////////////
const HiddenMenuBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
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
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onVentigatorLogoClick = useCallback(() => {
    navigate("/");
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
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
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
  }, [navigate]);

  const onAppClick = useCallback(() => {
    navigate("/app");
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
  }, [navigate]);

  const onHistoryClick = useCallback(() => {
    navigate("/history");
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
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    navigate("/contacts");
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
  }, [navigate]);

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
    <div className="hidden-menu-bar" data-animate-on-scroll>
      <div className="top-nav1">
        <div
          className="ventigator-logo"
          to="/"
          onClick={onVentigatorLogoClick}
        />
        <div className="home1" onClick={onHomeClick}>
          Home
        </div>
        <div className="home1" onClick={onAppClick}>
          App
        </div>
        <div className="home1" onClick={onHistoryClick}>
          History
        </div>
        <div className="home1" onClick={onContactsTextClick}>
          Contacts
        </div>
        <a href="https://airable.auth.us-east-1.amazoncognito.com/login?client_id=1ffva6aqq4sqvtj7b3hv191q1p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/patient" 
        className="hidden-link">Patient Login</a>
        <a href="https://airablehealth.auth.us-east-1.amazoncognito.com/login?client_id=14jsmal0gq1k85nqunpjnvjv6p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/healthcare"
        className="hidden-link">Provider Login</a>
      </div>
    </div>
  );
};

export default HiddenMenuBar;
