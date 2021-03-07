import React from "react";
const styles = {
  blue: {
    color: "blue"
  },
  red: {
    color: "red"
  },
  orange: {
    color: "orange"
  },
  green: {
    color: "green"
  }
}
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/books">
          <span style={styles.blue}>G</span>
          <span style={styles.red}>o</span>
          <span style={styles.orange}>o</span>
          <span style={styles.blue}>g</span>
          <span style={styles.green}>l</span>
          <span style={styles.red}>e</span> Books
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/saved">
                Saved
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/search">
                Search
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
