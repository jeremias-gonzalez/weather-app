import { useMode } from "../../ModeContext/ModeContext";

import Moon from '../Moon/Moon';
import Sun from "../Sun/Sun";

const HandleMode = () => {
  const { theme, toggleTheme } = useMode();
    return (
      <div
      className="relative flex items-center cursor-pointer transform transition-transform duration-1000 rounded-full"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <div>
          <Sun />
        </div>
      ) : (
        <div>
          <Moon />
        </div>
      )}
    </div>
  )
}

export default HandleMode