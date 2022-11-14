import React, { useState, useEffect } from "react";
import "../pages.css";
import What2 from "../../assets/what2.svg";

function What() {
  const [opacity, setOpacity] = useState(
    "opacity-0 z-20 transition-all duration-500 ease-in-out m-2"
  );

  useEffect(() => {
    setTimeout(() => {
      setOpacity("opacity-100 z-20 transition-all duration-500 ease-in-out");
    }, 500);
  });
  return (
    <div className="h-fit md:h-screen w-screen border-b-0 md:border-b-4 md:rounded-lg border-4 border-white flex justify-center p-2 bg">
      <div className={opacity}>
        <h1 className="text-yellow-400 os text-4xl font-extrabold text-center">
          <span className="text-white">Why</span>{" "}
          <span className="text-yellow">choose</span>{" "}
          <span className="text-white">the</span>{" "}
          <span className="text-yellow">InfoBot</span>
        </h1>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-row justify-evenly items-center">
            <div className="hidden md:block w-1/3">
              <img src={What2} alt="Artificial Intelligence Svg" />
            </div>
            <div className="w-fit md:w-1/2 flex flex-col md:items-center text-white text-md md:text-xl os text-center">
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Checked and Re Checked.
                </h2>
                <p className="">
                  Long gone the days of getting Syntax Errors, you can be sure
                  the things you copy from here are Correct.
                </p>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Constant Content Updates
                </h2>
                <p className="">
                  All of our departments publish new content weekly. Surprised
                  to learn something new? Feel more Surprised when you see it
                  added to InfoBot the following week.
                </p>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Free now, free forever
                </h2>
                <p className="">
                  Fret not the addition of a paywall, InfoBot is supported by
                  our awesome Donators and Executives.
                </p>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer pb-10">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  User Feedback
                </h2>
                <p className="">
                  Facebook stores user data, we store your feedback. Hate
                  something? Mail us it with a petition of like minded people
                  and there is a high probability of it being changed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
