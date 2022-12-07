import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import { ImgComponent } from "./imageComponent";
export const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });



  // --------------usestate--------------
// const [dyta,setDyta]=useState(false);
// const url= "http://localhost:4040/NewUser";
// const payload={
// namee,
// email,
// date,
// password,
// };


  // console.log(inpval);
  const [data,setData]=useState([]);
  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }
    })
  };
  const addData =(e)=>{
    e.preventDefault();
    const {name,email,date,password}= inpval;

    if(name=== ""){
      alert("Name is required")
    }else if(email===""){
alert("E-mail is required")
    }else if (!email.includes==="@"){
      alert("Enter Valid Email")
    }else if (date===""){
      alert("Date is Required")
    }else if (password===""){
      alert("Password cannot be Empty")
    }else if(password.length < 5){
      alert("Password Cannot be less than 5 characters")
    }else{
      console.log("Data Added Successfully !!");
      localStorage.setItem("userSaad", JSON.stringify([...data,inpval]));
    }
    console.log(inpval);

  }

  return (
    <div>
      <section >
        <div className="row mt-0     m-0 p-0">
          <div className="col-6 m-0 p-0 d-flex justify-content-center align-items-center">
            {" "}
            <div className="left-data" style={{ margin: "5px" }}>
              {" "}
              <h3>Signup</h3>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  style={{ maxWidth: "100%" }}
                >
                  {/* <Form.Label>Email address</Form.Label> */}

                  <Form.Control
                    type="text"
                    onChange={getData}
                    name="name"
                    placeholder="Enter Your Name"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
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
                    type="date"
                    onChange={getData}
                    name="date"
                    placeholder="Date"
                  />
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addData}>
                  Submit
                </Button>
              </Form>
              <p className="mt-2">
                Already have an account? <NavLink to="/Login">Sign in</NavLink>
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
