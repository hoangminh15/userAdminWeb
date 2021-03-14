import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AdminPage from "./AdminPage";
import "./App.css";
import AddUser from "./Component/AddUser";
import SimpleTable from "./Component/Table";
import Home from "./Home";
import Main from "./LoginPageComponent/Main";
import UserPage from "./UserPage";
import Table from "./Component/Table";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <UserPage />
            <Table />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
