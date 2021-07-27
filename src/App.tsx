import React from "react";
import "./assets/scss/app.scss";
import { ThemeProvider } from "./contexts/theme.provider";
import Layout from "./Layout";
// import "./assets/scss/light.scss";
//import loading component

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
