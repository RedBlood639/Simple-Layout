import React from "react";
import load from "../../assets/images/load.gif";
import "./style.scss";
const Loading: React.FC = () => {
  return (
    <div className="loading">
      <img src={load} alt="loading" />
    </div>
  );
};

export default Loading;
