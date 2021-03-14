import {
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import HelpIcon from "@material-ui/icons/Help";
import Autocomplete from "@material-ui/lab/Autocomplete";

function LoginForm() {
  const [day, setDay] = useState("Day");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");

  let dayOptions = [
    "Day",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  let monthOptions = [
    "Month",
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let yearOptions = ["Year", "2000"];

  return (
    <div className="login__form">
      <header>
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
      </header>
      <form className="form">
        <div className="text__input">
          <div className="name">
            <input
              type="text"
              className="name__input"
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="name__input"
              placeholder="Surname"
              required
            />
          </div>
          <input
            className="full__width__input"
            type="text"
            placeholder="Mobile number or email address"
            required
          />
          <br />
          <input
            className="full__width__input"
            type="password"
            placeholder="New password"
            required
          />
        </div>
        <div className="dob">
          <div className="dob__text">
            <span>Date of birth</span>
            <IconButton className="icon__question">
              <HelpIcon />
            </IconButton>
          </div>
          <div className="dob__form">
            <Autocomplete
              value={day}
              onChange={(event, newValue) => {
                setDay(newValue);
              }}
              className="input__date"
              required
              options={dayOptions}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
            <Autocomplete
              value={month}
              onChange={(event, newValue) => {
                setMonth(newValue);
              }}
              className="input__date"
              required
              options={monthOptions}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
            <Autocomplete
              value={year}
              onChange={(event, newValue) => {
                setYear(newValue);
              }}
              className="input__date"
              required
              options={yearOptions}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </div>
        </div>

        <div className="gender">
          <div className="gender__text">
            <span>Gender</span>
            <IconButton className="icon__question">
              <HelpIcon />
            </IconButton>
          </div>
          <div className="gender__input">
            <div className="gender__choice">
              <label for="male">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                defaultChecked
              />
            </div>
            <div className="gender__choice">
              <label for="female">Male</label>
              <input type="radio" id="male" name="gender" value="male" />
            </div>
            <div className="gender__choice">
              <label for="custom">Custom</label>
              <input type="radio" id="custom" name="gender" value="custom" />
            </div>
          </div>
        </div>
        <div className="last__part">
          <p className="term__condition">
            By clicking Sign Up, you agree to our{" "}
            <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You
            may recieve SMS notifications from us and can opt out at any time
          </p>
          <button className="submit__button" type="submit">
            Sign Up
          </button>
          <a className="have__account" href="facebook.com">
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
