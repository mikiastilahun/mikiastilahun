import React, { useEffect, useState } from "react";
import profileImage from "./assets/profile.jpg";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <div className={`${darkModeEnabled ? "dark" : ""}`}>
      <div
        className={`relative h-screen flex flex-col gap-24 justify-center items-center dark:bg-slate-900`}
      >
        <div>
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                checked={darkModeEnabled}
                onChange={(e) => {
                  setDarkModeEnabled(!darkModeEnabled);
                }}
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition  ${
                  darkModeEnabled ? `bg-[#48bb78] translate-x-full` : ``
                } `}
              ></div>
            </div>
            <div className="ml-3 text-gray-700 dark:text-white font-medium">
              {darkModeEnabled ? "Disable Dark-mode" : "Enable Dark-mode"}
            </div>
          </label>
        </div>
        <div className=" dark:bg-slate-900 relative flex flex-col justify-center items-center font-bold text-5xl bg-white w-[400px] h-[400px] border border-solid border-[rgba(59, 58,58,0.45] rounded-3xl shadow-[-10px_5px_10px_gray] shadow-gray-500 top-0 hover:top-[-50px] transition-[top] duration-500 ease-[ease]">
          <div className="rounded-3xl w-full overflow-hidden">
            <img
              src="https://www.gravatar.com/avatar/1e23957ae4101807f34bd979fb0c41ab?size=400"
              alt="profile image"
            />
          </div>
          <div>
            <p className="pt-8 pb-8 dark:text-white">Hey I'm Mike 👋 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
