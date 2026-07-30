import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          <img src="/logo.png" alt="FINIX AI" />
          <span>FINIX AI</span>
        </a>

        <nav className={open ? "nav-menu active" : "nav-menu"}>
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">About</a>
          <button className="login-btn">Login</button>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;
