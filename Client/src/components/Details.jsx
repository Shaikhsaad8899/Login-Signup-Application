import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
export const Details = () => {
  var [logindata, setLoginData] = useState([]);
  // alert(logindata[0].name);

 

  const [show, setShow] = useState(false);
  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
console.log(user);
      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate ;
      });
      if (userbirth) {
        setTimeout(() => {
          console.log("Okay");
          handleShow();
        }, 1500);
      }
    }
  };

  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Welcome  {logindata[0].name}</h1>
          <h1>Your Birthday is on  {logindata[0].date}</h1>
          <h1>Your Email is on  {logindata[0].email}</h1>
          {/* <h1>{abcd}</h1> */}
          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
             Wish You a very very Happy Birthday
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
             Wish You a very very Happy Birthday {logindata[0].name}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </>
      )}
    </>
  );
};
