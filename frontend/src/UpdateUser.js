import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./UpdateUser.css";

function UpdateUser() {
  const [id, setId] = useState();
  const [newId, setNewId] = useState();
  const [newName, setNewName] = useState();
  const [newDob, setNewDob] = useState("2000-09-15");
  const [newGender, setNewGender] = useState();
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    dob: "",
    gender: "",
  });

  const handleViewUser = (event, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("accessToken"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("/user/id/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUserInfo(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleUpdateUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("accessToken"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: userInfo.id,
      name: newName,
      dob: newDob,
      gender: newGender,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/admin/user", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(raw);
  };

  return (
    <div className="update__user">
      <p>Enter use ID need to be updated:</p>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="button" onClick={(event) => handleViewUser(event, id)}>
        See user
      </button>
      <div className="user__info">
        <div>ID:{userInfo.id}</div>
        <div>Name:{userInfo.name}</div>
        <div>Date of birth:{userInfo.dob}</div>
        <div>Gender:{userInfo.gender}</div>
      </div>
      <div className="update__userInfo">
        <h2>UPDATE USER INFO</h2>
        <p>Type in new info for user</p>
        <div className="input__field">
          {/* <label for="id">ID:</label>
          <input
            type="text"
            id="id"
            value={newId}
            onChange={(event) => setNewId(event.target.value)}
          /> */}
          <span>ID:{userInfo.id}</span>

        </div>
        <div className="input__field">
          <label for="name">Name:</label>
          <input
            type="text"
            id="Name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div className="input__field">
          <label for="dob">Date of birth:</label>
          <TextField
            id="dob"
            type="date"
            defaultValue="2000-09-15"
            InputLabelProps={{
              shrink: true,
            }}
            value={newDob}
            onChange={(date) => setNewDob(date.target.value)}
          />
        </div>

        <div
          className="input__field"
          onChange={(event) => setNewGender(event.target.value)}
        >
          <h3>Gender: </h3>
          <label for="male">Male</label>
          <input type="radio" name="gender" id="male" value="Male" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="female" value="Female" />
        </div>

        <button type="button" onClick={handleUpdateUser}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default UpdateUser;
