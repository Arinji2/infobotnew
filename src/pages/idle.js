import React, { useState, useEffect } from "react";
import "./pages.css";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/fontawesome-free-solid";
function Idle() {
  const [visibilty, setVisibilty] = useState(
    "relative bottom-20 flex flex-col items-center justify-start "
  );

  useEffect(() => {
    if (document.readyState !== "") {
      setTimeout(() => {
        setVisibilty(
          "relative bottom-20 flex flex-col items-center justify-start opacity-100 transition-all ease-in-out duration-500"
        );
      }, 5000);
    }
  });
  const redirect = () => {
    setVisibilty(
      "relative bottom-20 flex flex-col items-center justify-start opacity-0 transition-all ease-in-out duration-700"
    );
    setTimeout(() => {
      window.location.assign("/");
    }, 200);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen relative w-full bg-neutral-800 text-center">
      <div className="h-screen w-screen border-4 border-white flex items-center justify-center rounded-lg p-2 md:m-10 md:w-full bg z-30">
        <div className={visibilty}>
          <h1 className="text-yellow-400 text-4xl md:text-6xl os font-bold">
            The End?
          </h1>
          <p className="p-10"></p>
          <div className="relative w-1/4 h-1/4" id="logo">
            <img src={Logo} alt={Logo}></img>
          </div>
          <button
            className="os relative top-20 text-2xl  bg-white scale-90 hover:scale-100 hover:bg-yellow-400  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={() => {
              redirect();
            }}
          >
            Return to Your Journey <FontAwesomeIcon icon={faRocket} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Idle;
