import React from "react";
import not from "../assets/notfound.jpg";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="container row">
      <div>
        <h2 className="con-title">Uzur bunday sahifa hozircha yoq</h2>
        <Link to="/">
          <button className="btn">Bosh sahifaga qaytish</button>
        </Link>
      </div>
      <div>
        <img src={not} alt="notfound-img" className="not-img" />
      </div>
    </div>
  );
}

export default Notfound;
