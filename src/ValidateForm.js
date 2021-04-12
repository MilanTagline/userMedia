import React,{useState} from "react";
import './App.css';

const ValidateForm = () => {

    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: ""
    })

    const [error, setError] = useState({
        firstName: "",
        email: "",
        password: "",
        mobile: "",
        confirmPassword: ""
    })

    const validate = (name, value) => {
        switch (name) {
            case "firstName":
            if (!value || value.trim() === "") {
                return "First name is Required";
            } else {
                return "";
            }
            case "email":
            if (!value) {
                return "Email is Required";
            } else if (
                !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
            ) {
                return "Enter a valid email address";
            } else {
                return "";
            }
            case "mobile":
            if (!value || value.trim() === "") {
                return "Mobile number is Required";
            } else if (!value.match(/^[6-9]\d{9}$/)) {
                return "Enter a valid mobile number.";
            } else {
                return "";
            }
            case "password":
            if (!value) {
                return "Password is Required";
            } else if (value.length < 8 || value.length > 15) {
                return "Please fill at least 8 character";
            } else if (!value.match(/[a-z]/g)) {
                return "Please enter at least lower character.";
            } else if (!value.match(/[A-Z]/g)) {
                return "Please enter at least upper character.";
            } else if (!value.match(/[0-9]/g)) {
                return "Please enter at least one digit.";
            } else {
                return "";
            }
            case "confirmPassword":
            if (!value) {
                return "Confirm Password Required";
            } else if (value !== fields.password) {
                return "New Password and Confirm Password Must be Same";
            } else {
                return "";
            }
            default: {
            return "";
            }
        }
    };

    const handleUserInput = e => {
        setError({
            ...error,
            [e.target.name]: validate(e.target.name, e.target.value)
        })
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
          const error = validate(name, fields[name]);
          if (error && error.length > 0) {
            validationErrors[name] = error;
          }
        });
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
            return;
        }
        if (fields.firstName && fields.email && fields.password && fields.mobile) {
          const data = {
            firstName: fields.firstName,
            email: fields.email,
            password: fields.password,
            mobile: fields.mobile
          };
        }
    };
    
    return (
        <div>
          <div className="border">
            <div>
              <div>
                <label>First name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={fields.firstName}
                  onChange={event => handleUserInput(event)}
                  placeholder="First Name"
                />
              </div>
              <div>
                <span className="text-danger">{error.firstName}</span>
              </div>
            </div>
            
            <br/><br/>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={event => handleUserInput(event)}
                placeholder="Email Address"
              />
              <div>
                <span className="text-danger">{error.email}</span>
              </div>
            </div>

            <br/><br/>


            <div>
              <label>Mobile:</label>
              <input
                name="mobile"
                value={fields.mobile}
                onChange={event => handleUserInput(event)}
                placeholder="mobile"
              />
              <div>
                <span className="text-danger">{error.mobile}</span>
              </div>
            </div>

            <br/><br/>


            <div>
              <label>Password:</label>
              <input
                type="Password"
                name="password"
                value={fields.password}
                onChange={event => handleUserInput(event)}
                placeholder="Password"
              />
              <div>
                <span className="text-danger">{error.password}</span>
              </div>
            </div>

            <br/><br/>


            <div>
              <label>Confirm Password:</label>
              <input
                type="Password"
                name="confirmPassword"
                value={fields.confirmPassword}
                onChange={event => handleUserInput(event)}
                placeholder="confirm Password"
              />
              <div>
                <span className="text-danger">{error.confirmPassword}</span>
              </div>
            </div>

            <br/><br/>

          </div>
          <br />
          <button
            type="button"
            className="login-button pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
    );
}

export default ValidateForm