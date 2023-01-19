import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Signout() {
  async function loginStatus() {
    localStorage.removeItem("User");
    localStorage.removeItem("UserData");
  }

  useEffect(() => {
    loginStatus()
      .then((result) => console.log(result))
      .then((result) => {
        //setTimeout(window.location.replace("/home"),500)
        window.setTimeout(function () {
          window.location.href = "/";
        }, 750);
        //
      });
  }, []);

  return (
    <>
      <div></div>{" "}
    </>
  );
}
