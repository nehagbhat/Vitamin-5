import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: theme === "dark" ? "#333333" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#333333",
        minHeight: "100vh",
      }}
    >
      <h1>Welcome!</h1>
      <p>This is the Home page of the application.</p>
    </div>
  );
}

export default Home;
