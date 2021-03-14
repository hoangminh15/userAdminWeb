import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "./AdminPage.css";
import AddUser from "./Component/AddUser";
import Table from "./Component/Table"
import LoginPage from "./LoginPage";
import RemoveUser from "./RemoveUser";
import UpdateUser from "./UpdateUser";

function AdminPage() {
  let { path, url } = useRouteMatch();
  return (
    <div className="admin__page">
      <Link to="/">
        <button>Back to home </button>
      </Link>
      <div className="admin__options">
        <nav>
          <ul>
            <li>
              <Link to={`${url}/add`}>Add User</Link>
            </li>
            <li>
              <Link to={`${url}/user`}>View Users</Link>
            </li>
            <li>
              <Link to={`${url}/update`}>Update User</Link>
            </li>
            <li>
              <Link to={`${url}/remove`}>Remove User</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path={`${path}/add`}>
          <AddUser />
        </Route>
        <Route path={`${path}/user`}>
          <Table />
        </Route>
        <Route path={`${path}/update`}>
          <UpdateUser />
        </Route>
        <Route path={`${path}/remove`}>
          <RemoveUser />
        </Route>
      </Switch>
    </div>
  );
}

export default AdminPage;
