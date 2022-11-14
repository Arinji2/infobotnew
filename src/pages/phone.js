import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./pages.css";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity, faCode } from "@fortawesome/fontawesome-free-solid";
import { Icon } from "@iconify/react";
import codeCurly from "@iconify/icons-bx/code-curly";
function Phone() {
  const [visibilty, setVisibilty] = useState(
    "relative flex flex-col h-screen opacity-0"
  );

  const [renders, setRenders] = useState(0);
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(".active", {
        zIndex: 100,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "100%",
        scale: 1,
        duration: 2,
        color: "white",
        borderWidth: "4px",
        borderColor: "white",
        borderRadius: "0.5rem",
      });
    });
    return () => ctx.revert();
  }, [renders]);
  useEffect(() => {
    setTimeout(() => {
      setVisibilty(
        "relative flex flex-col h-screen md:h-screen opacity-100 transition-all ease-in-out duration-700"
      );
    }, 500);
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen relative w-full bg-neutral-800 text-center">
      <div className="h-screen w-screen border-4 border-white flex items-center justify-center rounded-lg p-2 md:m-10 md:w-full bg z-30 absolute">
        <div className={visibilty}>
          {/*Row 1 */}
          <div className="flex flex-row flex-wrap justify-center md:justify-evenly w-screen text-yellow-400 os text-lg md:text-2xl text-center items-center border-b-2 border-white rounded-xl p-4 mt-4">
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group"
              onClick={(el) => {
                const docs = el.currentTarget;
                docs.classList.add("active");
                docs.classList.add("bg");
                docs.innerText = "";
                setRenders(renders + 1);
                setTimeout(() => {
                  window.location.assign("/loops");
                }, 2000);
              }}
            >
              <h1> Loops </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <FontAwesomeIcon
                icon={faInfinity}
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              ></FontAwesomeIcon>
            </div>
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              onClick={(el) => {
                const docs = el.currentTarget;
                docs.classList.add("active");
                docs.classList.add("bg");
                docs.innerText = "";
                setRenders(renders + 1);
                setTimeout(() => {
                  window.location.assign("/methods");
                }, 2000);
              }}
            >
              <h1> Methods </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <Icon
                icon={codeCurly}
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              />
            </div>
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              id="block-gray"
            >
              <h1> Strings </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <Icon
                icon="mdi:sort-alphabetical-variant"
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              />
            </div>
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              id="block-gray"
            >
              <h1> Classes </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <FontAwesomeIcon
                icon={faCode}
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              ></FontAwesomeIcon>
            </div>
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              id="block-gray"
            >
              <h1> Arrays </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <Icon
                icon="bx:bracket"
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              />
            </div>
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              id="block-gray"
            >
              <h1> Patterns </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <Icon
                icon="bxs:shapes"
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              />
            </div>
            <div
              className="w-24 md:w-48 h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              id="block-gray"
            >
              <h1> Series </h1>
              <h2 className="text-white md:text-2xl text-sm">Programs</h2>
              <Icon
                icon="fluent:math-symbols-32-filled"
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 "
              />
            </div>
          </div>
          {/*Row 2 */}
          <div className="flex flex-row flex-nowrap justify-center md:justify-evenly w-screen text-yellow-400 os text-lg md:text-2xl text-center items-center border-b-2 border-white rounded-xl pb-4 mt-4">
            <div
              className="w-28 md:w-56 h-20 md:h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center justify-center md:justify-start group hover:cursor-pointer"
              id="block-black"
            >
              <h1> Specific Test </h1>
              <h2 className="text-white">PTO</h2>
              <Icon
                icon="ci:repeat"
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 hidden md:block"
              />
            </div>
            <div className="p-1">
              <h1 className="text-2xl ">INFOBOT</h1>
              <h2 className="hidden md:block text-white">Coding Made Easier</h2>
            </div>
            <div
              className="w-28 md:w-56 h-20 md:h-32 shadow-lg shadow-black bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center group justify-center md:justify-start "
              id="block-black"
            >
              <h1> Random Test </h1>
              <h2 className="text-white">PTO</h2>
              <Icon
                icon="fa:random"
                className="relative top-6 text-3xl group-hover:text-4xl transition-all ease-in-out duration-700 hidden md:block"
              />
            </div>
          </div>

          {/*Row 3 */}
          <div className="flex justify-center items-center border-b-2 border-white rounded-xl pb-4 mt-4">
            <div className="w-20 md:w-32  h-20 md:h-32 ">
              <img src={Logo} alt={Logo}></img>
            </div>
          </div>
          {/*Row 4 */}
          <div className="flex flex-row flex-nowrap justify-evenly md:justify-evenly w-screen text-yellow-400 os text-lg md:text-2xl text-center items-center border-b-2 border-white rounded-xl pb-4 mt-4">
            <h1
              className="scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => {
                window.location.assign("/what");
              }}
            >
              What
            </h1>
            <h1
              className="scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => {
                window.location.assign("/why");
              }}
            >
              Why
            </h1>
            <h1
              className="scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => {
                window.location.assign("/team");
              }}
            >
              Team
            </h1>
            <h1
              className="scale-90 hover:scale-100 hover:cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => {
                window.location.assign("/contact");
              }}
            >
              Contact
            </h1>
          </div>
          {/*Row 5 */}
          <div
            className="flex flex-row flex-nowrap justify-center  w-screen text-yellow-400 os text-lg md:text-2xl text-center items-center pb-4 mt-5"
            id="r-5"
          >
            <div
              className="w-10  md:w-14 h-10 md:h-14 shadow-lg shadow-gray-800 bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center group justify-center transition-all ease-in-out duration-500"
              onClick={() => {
                window.location.assign("/account");
              }}
            >
              <Icon
                icon="bx:user"
                className=" text-3xl group-hover:text-4xl transition-all ease-in-out duration-500"
              />
            </div>
            <div
              className="w-10  md:w-14 h-10 md:h-14 shadow-lg shadow-gray-800 bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center group justify-center transition-all ease-in-out duration-500"
              onClick={() => {
                window.location.assign("/settings");
              }}
            >
              <Icon
                icon="arcticons:google-settings"
                className=" text-3xl group-hover:text-4xl transition-all ease-in-out duration-500"
              />
            </div>
            <div
              className="w-10  md:w-14 h-10 md:h-14 shadow-lg shadow-gray-800 bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center group justify-center transition-all ease-in-out duration-500"
              onClick={() => {
                window.location.assign("/chat");
              }}
            >
              <Icon
                icon="bi:chat-square"
                className=" text-3xl group-hover:text-4xl transition-all ease-in-out duration-500"
              />
            </div>
            <div
              className="w-10  md:w-14 h-10 md:h-14 shadow-lg shadow-gray-800 bg-transparent scale-90 md:hover:scale-100 relative flex flex-col items-center group justify-center transition-all ease-in-out duration-500"
              onClick={() => {
                window.location.assign("/off");
              }}
            >
              <Icon
                icon="bi:power"
                className=" text-3xl group-hover:text-4xl transition-all ease-in-out duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
