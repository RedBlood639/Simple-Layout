import React from "react";
import "../assets/scss/black.scss";
import "../assets/scss/light.scss";
import { ThemeContext } from "../contexts/theme.context";

type ThemeProps = { children: any };
export default function Theme({ children }: ThemeProps) {
  const {
    themeState: { theme },
  } = React.useContext<any>(ThemeContext);

  return <div className={theme}>{children}</div>;
}
