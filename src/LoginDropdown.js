import React from 'react'

/////////////////////////////////////////////////////////////
/* Portal Login Popup after clicking login on landing page */
/////////////////////////////////////////////////////////////

function LoginDropdown() {
  return (
    <div className="dropdown-menu information-grid">
        <div>
            <div className="dropdown-links">
                <a href="https://airable.auth.us-east-1.amazoncognito.com/login?client_id=1ffva6aqq4sqvtj7b3hv191q1p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/patient"
                  className="link">
                Patient Login
                </a>
                <a href="https://airablehealth.auth.us-east-1.amazoncognito.com/login?client_id=14jsmal0gq1k85nqunpjnvjv6p&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=https://airable.org/healthcare"
                  className="link">
                Provider Login
                </a>
            </div>
        </div>
    </div>
  )
}

export default LoginDropdown