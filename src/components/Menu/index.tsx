import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/images/avatar.png";
import DashBoardSvg from "../../assets/icons/DashBoardSvg";
import RecoverySvg from "../../assets/icons/RecoverySvg";
import InvestSvg from "../../assets/icons/InvestSvg";
import "./style.scss";

const Menu: React.FC<{ match: any }> = ({ match }) => {
  const [page, setPage] = useState<number>(0);
  return (
    <div className="menu-container">
      <a className="menu-title">
        <img src={Avatar} alt="avatar" />
        <span>The TIKI Bar</span>
      </a>
      <ul className="menu-items">
        <li className={`menu-item ${page === 0 && "selected"}`}>
          <Link to="/setup/dashboard" onClick={() => setPage(0)}>
            <span className="marker"></span>
            <DashBoardSvg />
            <span className="label">Dashboard</span>
          </Link>
        </li>
        <li className={`menu-item ${page === 1 && "selected"}`}>
          <Link to="/setup/recovery" onClick={() => setPage(1)}>
            <span className="marker"></span>
            <RecoverySvg />
            <span className="label">Recovery</span>
          </Link>
        </li>
        <li className={`menu-item ${page === 2 && "selected"}`}>
          <Link to="/setup/investment" onClick={() => setPage(2)}>
            <span className="marker"></span>
            <InvestSvg />
            <span className="label">Grow Your Investment</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
