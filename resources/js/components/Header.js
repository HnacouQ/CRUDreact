import { fromPairs } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <span className="navbar-brand"><Link to="/">Quốc Anh</Link></span>
        <span className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span className="nav-link"><Link to="/">Home</Link> <span className="sr-only">(current)</span></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/products">Products</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/add">Thêm mới</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/list-item">List</Link></span>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;
