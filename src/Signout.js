import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Signout() {
  //deletes local storage and redirects to the home page
  async function logOut() {
    localStorage.removeItem("User");
    localStorage.removeItem("UserData");
  }

  useEffect(() => {
    logOut().then(() => {
      window.setTimeout(function () {
        window.location.href = "/";
      }, 750);
    });
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
