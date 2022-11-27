import React, { useEffect, useState } from "react";

export const Details = () => {
  var [logindata, setLoginData] = useState([]);
  // alert(logindata[0].name);

  console.log(logindata);

  var todayDate = new Date().toISOString().slice(0, 10);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });
      if (userbirth) {
        setTimeout(() => {
          console.log("Okay");
        }, 3000);
      }
    }
  };

  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <h1>Details Pages</h1>

          <h4>{logindata[0].name}</h4>
        </>
      )}
    </>
  );
};
