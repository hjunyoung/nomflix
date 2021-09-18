import React from 'react';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
