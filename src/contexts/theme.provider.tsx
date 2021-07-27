import React, { useReducer } from "react";
import { ThemeContext } from "./theme.context";

const INITIAL_STATE = {
  theme: "dark",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "dark":
      return {
        ...state,
        theme: "dark",
      };
    case "light":
      return {
        ...state,
        theme: "light",
      };
    default:
      return state;
  }
}

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
