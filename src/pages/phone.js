import React, { useState } from "react";
import "./pages.css";
import Strings from "../assets/svg/strings.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity, faBox } from "@fortawesome/fontawesome-free-solid";
import { Icon } from "@iconify/react";
import codeCurly from "@iconify/icons-bx/code-curly";
function Phone() {
  const [visibilty] = useState("relative  flex flex-col  visible h-screen ");

  return (
    <div className="flex flex-col justify-center items-center h-screen relative w-full bg-neutral-800 text-center">
      <div className="h-screen w-screen border-4 border-white flex items-center justify-center rounded-lg p-2 md:m-10 md:w-full bg z-30">
        <div className={visibilty}>
          <div className="flex flex-row   justify-start relative top-20">
            <div className="flex flex-row flex-wrap justify-center md:justify-evenly w-screen text-yellow-400 os text-2xl text-center items-center">
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-gray"
              >
                <h1> Loops </h1>
                <FontAwesomeIcon
                  icon={faInfinity}
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                ></FontAwesomeIcon>
              </div>
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-black"
              >
                <h1> Methods </h1>
                <Icon
                  icon={codeCurly}
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                />
              </div>
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-gray"
              >
                <h1> Strings </h1>
                <Icon
                  icon="mdi:sort-alphabetical-variant"
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                />
              </div>
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-black"
              >
                <h1> Classes </h1>
                <FontAwesomeIcon
                  icon={faBox}
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                ></FontAwesomeIcon>
              </div>
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-gray"
              >
                <h1> Arrays </h1>
                <Icon
                  icon="bx:bracket"
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                />
              </div>
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-black"
              >
                <h1> Patterns </h1>
                <Icon
                  icon="bxs:shapes"
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                />
              </div>
              <div
                className="w-32 md:w-48 h-32 shadow-md shadow-white bg-transparent scale-90 hover:scale-100 relative flex flex-col items-center group"
                id="block-gray"
              >
                <h1> Series </h1>
                <Icon
                  icon="fluent:math-symbols-32-filled"
                  className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
