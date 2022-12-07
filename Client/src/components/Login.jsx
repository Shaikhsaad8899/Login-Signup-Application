import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ImgComponent } from "./imageComponent";
const Login = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  // const [data, setData] = useState([]);
  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userSaad");
    const { email, password } = inpval;
    if (email === "") {
      alert("E-mail is required");
    } else if (!email.includes === "@") {
      alert("Enter Valid Email");
    } else if (password === "") {
      alert("Password cannot be Empty");
    } else if (password.length < 5) {
      alert("Password Cannot be less than 5 characters");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("User Login Successful");
          console.log(userlogin);
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/Details");
        }
      }
    }
  };

  return (
    <div>
      <section>
        <div className="row mt-0     m-0 p-0">
          <div className="col-6 m-0 p-0 d-flex justify-content-center align-items-center">
            {" "}
            <div className="left-data" style={{ margin: "5px" }}>
              {" "}
              <h3 className="m-2">Login</h3>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  style={{ maxWidth: "100%" }}
                >
                  {/* <Form.Label>Email address</Form.Label> */}

                  <Form.Control
                    type="email"
                    onChange={getData}
                    name="email"
                    placeholder="Enter email"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    onChange={getData}
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addData}>
                  Submit
                </Button>
              </Form>
              <p className="mt-2">
                Register for new account? <NavLink to="/">Sign up</NavLink>
              </p>
            </div>
          </div>

          <div className="col-6 m-0 p-0 d-flex justify-content-center align-items-center">
            {" "}
            <div className="right-data">
              {" "}
              <ImgComponent />
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Login;
