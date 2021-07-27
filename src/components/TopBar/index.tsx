import React from "react";
import "./style.scss";
import DocSvg from "../../assets/icons/DocSvg";
import SunSvg from "../../assets/icons/SunSvg";
import MoonSvg from "../../assets/icons/MoonSvg";
import { ThemeContext } from "../../contexts/theme.context";
type TopBarProps = {
  handleSidebar: () => void;
};
const TopBar: React.FC<TopBarProps> = ({ handleSidebar }) => {
  const {
    themeDispatch,
    themeState: { theme },
  } = React.useContext<any>(ThemeContext);
  const handleChangeTheme = () => {
    const temp = theme == "light" ? "dark" : "light";
    themeDispatch({ type: temp });
  };
  return (
    <div className="topbar-container">
      <button className="menu-btn" onClick={handleSidebar}>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          width="1.5rem"
          height="1.5rem"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="search">
        <div className="searchContainer">
          <div className="bookicon">
            <DocSvg />
          </div>
          <input type="text" placeholder="Paste your address here" />
        </div>
      </div>
      <div className="theme-btn">
        <button onClick={handleChangeTheme}>
          {theme == "dark" ? <SunSvg /> : <MoonSvg />}
        </button>
      </div>
    </div>
  );
};
export default TopBar;
