import React, { useState } from "react";
import "./RemoveUser.css";

function RemoveUser() {
  const [id, setId] = useState("");

  const removeAccount = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("accessToken"));
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("/admin/account/" + id, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const removeUser = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("accessToken"));
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    console.log("/admin/user/" + id);

    fetch("/admin/user/" + id, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert("User removed");
          return response.text();
        } else throw new Error("ID not exist");
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert("ID not exist");
        console.log("error", error);
      });
  };

  const handleSubmit = (event, id) => {
    removeAccount(id);
    removeUser(id);
  };

  return (
    <div className="remove__user">
      <p>Enter ID of user is going to be removed:</p>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="button" onClick={(event) => handleSubmit(event, id)}>
        Remove
      </button>
    </div>
  );
}

export default RemoveUser;
