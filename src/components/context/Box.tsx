import { useContext } from "react";
import { themeContext } from "./ThemeContext";

function Box() {
  const theme = useContext(themeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme context
    </div>
  );
}

export default Box;
