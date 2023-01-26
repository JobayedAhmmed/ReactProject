import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    fullname: "",
    email: "",
    mobile: "",
    massage: "",
  });

  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    axios
      .post("http://localhost/react_bsms/api/register.php", info)
      .then((res) => {
        alert(res.data);
        // console.log(res.data);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1>User Contact Form</h1>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Name:
              </label>
              <br />
              <input
                type="text"
                name="fullname"
                onChange={changeValue}
                // className="form-control"
                id="fullname"
                aria-describedby="fnameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Email:
              </label>
              <br />
              <input
                type="text"
                name="email"
                onChange={changeValue}
                // className="form-control"
                id="username"
                aria-describedby="lnameHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                mobile:
              </label>
              <br />
              <input
                type="text"
                name="mobile"
                onChange={changeValue}
                // className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Massage:
              </label>
              <br />
              <input
                type="text"
                name="massage"
                onChange={changeValue}
                // className="form-control"
                id="massage"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Conform
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}
