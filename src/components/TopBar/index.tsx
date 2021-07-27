import React, { useState } from "react";
import "./style.scss";
import DocSvg from "../../assets/icons/DocSvg";
import SunSvg from "../../assets/icons/SunSvg";
import MoonSvg from "../../assets/icons/MoonSvg";

const TopBar: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <div className="topbar-container">
      {/* <button className="menu-btn">1</button> */}
      <div className="search">
        <div className="searchContainer">
          <div className="bookicon">
            <DocSvg />
          </div>
          <input type="text" placeholder="Paste your address here" />
        </div>
      </div>
      <div className="theme-btn">
        <button onClick={() => setTheme(!theme)}>
          {theme ? <SunSvg /> : <MoonSvg />}
        </button>
      </div>
    </div>
  );
};
export default TopBar;
