import React, { useState, useEffect } from "react";
import "../pages.css";
import Contact from "../../assets/contact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowAltCircleLeft,
  faHandPointer,
} from "@fortawesome/fontawesome-free-solid";
function What() {
  const [opacity, setOpacity] = useState(
    "opacity-0 z-20 transition-all duration-500 ease-in-out"
  );
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(
        "opacity-100 z-20 transition-all duration-500 ease-in-out m-2"
      );
    }, 500);
  });

  const renderHint = (option) => {
    if (option === 1) {
      return (
        <div className="text-white text-xl opacity-100 transition-all ease-in-out duration-300">
          <h1>Hint: Click on the Text to instantly mail us</h1>
        </div>
      );
    } else {
      return (
        <div className="text-white text-xl opacity-0 transition-all ease-in-out duration-300">
          <h1>Hint: Click on the Text to instantly mail us</h1>
        </div>
      );
    }
  };
  return (
    <div className="h-screen w-screen border-b-0 md:border-b-4 md:rounded-lg border-4 border-white flex justify-center p-2 bg">
      <div className={opacity}>
        <h1 className="text-yellow-400 os text-4xl font-extrabold text-center">
          <span className="text-white">Contact</span>{" "}
          <span className="text-yellow">the</span>{" "}
          <span className="text-white">InfoBot</span>{" "}
        </h1>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="w-3/4 md:w-1/3">
              <img src={Contact} alt="Artificial Intelligence Svg" />
            </div>
            <div className="w-fit md:w-1/2 flex flex-col md:items-center text-white text-md md:text-xl os text-center">
              {showHint ? renderHint(1) : renderHint(0)}
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Have Questions?
                </h2>
                <a href="mailTo:info@infobot.uk">info@infobot.tech </a>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faHandPointer}
                    onMouseOver={() => {
                      setShowHint(true);
                    }}
                    onMouseLeave={() => {
                      setShowHint(false);
                    }}
                  />
                </span>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Want to suggest Programs?
                </h2>
                <a href="mailTo:info@infobot.uk">suggest@infobot.tech </a>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faHandPointer}
                    onMouseOver={() => {
                      setShowHint(true);
                    }}
                    onMouseLeave={() => {
                      setShowHint(false);
                    }}
                  />
                </span>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Looking for a Position?
                </h2>
                <a
                  href="https://staff.infobot.tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  Custom Application System{" "}
                </a>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faHandPointer}
                    onMouseOver={() => {
                      setShowHint(true);
                    }}
                    onMouseLeave={() => {
                      setShowHint(false);
                    }}
                  />
                </span>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer pb-10">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Want to Review Us?
                </h2>
                <a
                  href="https://www.trustpilot.com/review/infobot.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  TrustPilot{" "}
                </a>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faHandPointer}
                    onMouseOver={() => {
                      setShowHint(true);
                    }}
                    onMouseLeave={() => {
                      setShowHint(false);
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="md:fixed bottom-5 w-screen flex flex-row justify-evenly gap-5 text-white text-2xl p-2 border-4 border-white rounded-lg md:p-0 md:border-0 md:border-none">
            <p
              className="text-white scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
              onClick={() => {
                window.history.back();
              }}
            >
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </p>
            <p
              className="text-white scale-90 hover:scale-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
              onClick={() => {
                window.location.assign("/phone");
              }}
            >
              <FontAwesomeIcon icon={faHome} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
