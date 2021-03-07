import { FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField } from "@material-ui/core";
import React, { useState } from "react";
import HelpIcon from "@material-ui/icons/Help";
import Autocomplete from "@material-ui/lab/Autocomplete";

function LoginForm() {
    const [gender, setGender] = useState('Male');

    function handleGenderChange(event) {
        setGender(event.target.value);
    }
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

  let monthOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  let yearOptions = ['2000'];

  return (
    <div className="login__form">
      <header>
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
      </header>
      <form className="form">
        <input type="text" placeholder="First name" required />
        <input type="text" placeholder="Surname" required />
        <br />
        <input
          type="text"
          placeholder="Mobile number or email address"
          required
        />
        <br />
        <input type="text" placeholder="New password" required />
        <div className="dob">
          <div className="dob__text">
            <span>Date of birth</span>
            <HelpIcon />
          </div>
          <div className="dob__form">
            <Autocomplete
              required
              options={dayOptions}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} label="Day" variant="outlined" />
              )}
            />
            <Autocomplete
              required
              options={monthOptions}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} label="Month" variant="outlined" />
              )}
            />
            <Autocomplete
              required
              options={yearOptions}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} label="Year" variant="outlined" />
              )}
            /> 
          </div>
        </div>
        <div className="gender">
            <div className="gender__text">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>

                </FormControl>

            </div>
            <div className="gender__input">


            </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
