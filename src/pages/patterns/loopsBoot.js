import { Triangle } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import "../pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/fontawesome-free-solid";
function Boot() {
  const [isBooting, setIsBooting] = useState(true);
  const [visibilty, setVisibilty] = useState(
    "relative bottom-20 flex flex-col items-center justify-start visible"
  );
  useEffect(() => {
    if (document.readyState !== "") {
      setTimeout(() => {
        setVisibilty(
          "relative bottom-20 flex flex-col items-center justify-start opacity-0 transition-all ease-in-out duration-500"
        );
        setTimeout(() => {
          setIsBooting(false);
          window.location.assign("/loops-Loaded");
        }, 1000);
      }, 2000);
    }
  });
  const loaderChoice = (choice) => {
    if (choice === 1)
      return <Triangle color="yellow" height="300" width="300" />;
  };
  return (
    <div className="h-screen w-screen border-4 border-white flex items-center justify-center rounded-lg p-2  bg">
      <div className={visibilty}>
        <div className="relative">
          {isBooting ? loaderChoice(1) : loaderChoice(0)}
        </div>
        <div className="icon absolute text-white text-7xl">
          <FontAwesomeIcon icon={faInfinity} />
        </div>

        <div className="icon text-center absolute text-white w-1/4 h-1/4"></div>
        <h1 className="text-white text-2xl md:text-4xl os font-bold text-center">
          <span className="text-yellow-400">Loops</span> Is Starting
        </h1>
      </div>
    </div>
  );
}

export default Boot;
