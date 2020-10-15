import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>SpaceX News</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Last New</Link>
          </li>
          <li>
            <Link to="/ten">Last Ten News</Link>
          </li>
          <li>
            <Link to="/all">All News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
