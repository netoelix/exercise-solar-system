import React from 'react';

function Header() {
  return (
    <header>
      <div className="solar-system">
        <h1>Sistema Solar</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="40" fill="yellow" />
          <circle cx="120" cy="200" r="10" fill="orange" />
          <circle cx="160" cy="200" r="7" fill="red" />
          <circle cx="220" cy="200" r="15" fill="blue" />
          <circle cx="270" cy="200" r="12" fill="green" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
