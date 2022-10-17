import { Grid } from "react-loader-spinner";
import React, { useState } from "react";
import "./pages.css";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
function Auth() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibilty, setVisibilty] = useState(
    "relative bottom-20 flex flex-col items-center justify-start visible"
  );

  const loaderChoice = (choice) => {
    if (choice === 1)
      return (
        <Grid color="yellow" height="200" width="200" visible={isLoading} />
      );
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen relative w-full bg-neutral-800 text-center">
      <div className="h-screen w-fit border-4 border-white flex items-center justify-center rounded-lg p-2 bg-black md:m-10 md:w-full">
        <div className={visibilty}>
          <h1 className="text-4xl md:text-6xl text-white os font-bold">
            Login to Your Device
          </h1>
          <button className="os mt-10 text-2xl  bg-white scale-90 hover:scale-100 hover:bg-yellow-400  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faGoogle} className="" /> Login with Google
          </button>
          <div className="relative top-10">
            {isLoading ? loaderChoice(1) : loaderChoice(0)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
