import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Space News</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">New</Link>
          </li>
          <li>
            <Link to="/ten">Ten</Link>
          </li>
          <li>
            <Link to="/all">All</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
