import React from "react";
import "../App.scss";
// import { useNavigate } from "react-router-dom";
import Text from "./Text";
function Home() {
  // const navigate = useNavigate();

  // function handleClick() {

  //   navigate("/chart");
  // }

  return (
    <>
      <Text />
      <div className="form">
        <form action="/chart" method="get">
          <div>
            <h2 className="form form--heading">Create an account</h2>
          </div>
          <br />
          <div>
            <label className="form form--label">
              Your email address:
              <br />
              <input
                className="form form--input"
                type="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </label>
          </div>
          <br />
          <div className="form form--label">
            <label>
              Your password:
              <br />
              <input
                className="form form--input"
                type="password"
                name="password"
                id="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              />
            </label>
          </div>
          <br />
          <div className="form form--label">
            <label>
              Confirm your password:
              <br />
              <input
                className="form form--input"
                type="password"
                name="confirm_password"
                id="confirm_password"
                required
              />
            </label>
          </div>
          <br />
          <div className="form form--label">
            <label>
              Your full name:
              <br />
              <input className="form form--input" type="text" name="name" />
            </label>
          </div>
          <br />
          <div className="form form--label">
            <label>
              Your phone number:
              <br />
              <input
                className="form form--input"
                type="text"
                name="phone"
                pattern="[0-9]{10}"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              <input type="checkbox" defaultChecked required />
              I read and agree Terms and Conditions
              <br />
            </label>
          </div>
          <br />
          <div>
            {/* <button type="button" className="btn" onClick={handleClick}>
            Create account
          </button> */}
            <input
              className="form form--btn"
              type="submit"
              value="Create account"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
