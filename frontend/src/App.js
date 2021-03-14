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
import { ProvideAuth } from "./AuthComponent/Auth";
import PrivateRoute from "./AuthComponent/PrivateRoute";
import AuthButton from "./AuthComponent/AuthButton";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="app">
          <AuthButton />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <UserPage />
              <Table />
            </Route>
            <PrivateRoute path="/admin">
              <AdminPage />
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
