import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="row justify-content-between pt-4">
        <div className="pl-3">
          <h1>Todo Lists</h1>
        </div>
        <div className="pr-3">
          <ul className="list-inline">
            <li className="list-inline-item title">
              <Link className="btn btn-primary" to="/">
                Home
              </Link>
            </li>
            <li className="list-inline-item title">
              <Link className="btn btn-dark" to="/history">
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
