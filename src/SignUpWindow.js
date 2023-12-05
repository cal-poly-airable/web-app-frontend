import React from "react";
import { useCallback } from "react";
import "./SignUpWindow.css";
import "./global.css";

const SignUpWindow = () => {
  const onFrameButtonClick = useCallback(() => {
    window.open(
      "https://airable.auth.us-east-1.amazoncognito.com/signup?client_id=1ffva6aqq4sqvtj7b3hv191q1p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/patient"
    );
  }, []);

  const onProviderClick = useCallback(() => {
    window.open(
      "https://airablehealth.auth.us-east-1.amazoncognito.com/signup?client_id=14jsmal0gq1k85nqunpjnvjv6p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/healthcare"
    );
  }, []);

  return (
    <div className="sign-up-window">
      <div className="lets-get-started-wrapper">
        <b className="lets-get-started">Let’s get started</b>
      </div>
      <div className="patient">
        <button className="patient-signup-wrapper" onClick={onFrameButtonClick}>
          <a
            className="patient-signup"
          >
            Patient Signup
          </a>
        </button>
        <button className="provider" onClick={onProviderClick}>
          <div className="provider-signup">Provider Signup</div>
        </button>
      </div>
    </div>
  );
};

export default SignUpWindow;
