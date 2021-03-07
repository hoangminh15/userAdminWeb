import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserDetail from "./UserDetail";
import SearchBar from "./SearchBar";
import "./Table.css";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 600,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    width: "99%",
    marginTop: theme.spacing(7),
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
}));

export default function SimpleTable() {
  const classes = useStyles();

  const [data, upDateData] = useState([]);
  const [firstLoad, setLoad] = useState(true);
  const [showUserDetail, setShowUserDetail] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [choosenField, setChoosenField] = useState("all");
  let isLoading = true;

  async function handleSubmit(input, event) {
    let url = '/user/' + choosenField + "/" + input;
    let response = await fetch(url);
    let body = await response.json();
    console.log(body);
    upDateData(body);
  };

  const handleChoosenFieldChange = (event) => {
    const newChoosenField = event.target.value;
    setChoosenField(newChoosenField);
    if (newChoosenField === "all") {
      sampleFunc();
    }
  };

  async function sampleFunc() {
    let response = await fetch("/user");
    let body = await response.json();
    console.log(body);
    upDateData(body);
  }

  const popUpUserDetail = (userDetail) => {
    setShowUserDetail(true);
    setUserDetail(userDetail);
  };

  async function handleDoubleClick(id, event) {
    let response = await fetch("/user/" + id);
    let body = await response.json();
    popUpUserDetail(body);
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;

  return (
    <div className={classes.paper}>
      {/* <LoginForm /> */}
      <div className="find__user__combobox">
        <label>Find user by: </label>
        <select value={choosenField} onChange={handleChoosenFieldChange}>
          <option value="all">All user</option>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="dob">Date of birth</option>
          <option value="gender">Gender</option>
        </select>
      </div>
      <SearchBar handleSubmit={handleSubmit} />

      {isLoading ? (
        // <CircularProgress />
        <p>No result found</p>
      ) : (
        <TableContainer
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Dob</TableCell>
                <TableCell align="center">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  className="table__row"
                  key={row.id}
                  onDoubleClick={(e) => handleDoubleClick(row.id, e)}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {/* Create a list of buttons for pagination*/}
      <div className="button__list">
        
      </div>

      <Link className={classes.link} to="/">
        {" "}
        <Typography align="left">
          &#x2190; Head back to save data
        </Typography>{" "}
      </Link>
      {showUserDetail && (
        <UserDetail
          show={showUserDetail}
          onClose={() => setShowUserDetail(false)}
          userDetail={userDetail}
        />
      )}
    </div>
  );
}
