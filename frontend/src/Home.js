import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <nav>
        <ul>
          <li>
            <Link to="/user">User Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Home;
