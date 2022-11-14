import React, { useState, useEffect } from "react";
import "../pages.css";
import What1 from "../../assets/what1.svg";

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
          <span className="text-white">What</span>{" "}
          <span className="text-yellow">is</span>{" "}
          <span className="text-white">the</span>{" "}
          <span className="text-yellow">InfoBot</span>
        </h1>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-row justify-evenly items-center">
            <div className="hidden md:block w-1/3">
              <img src={What1} alt="Artificial Intelligence Svg" />
            </div>
            <div className="w-fit md:w-1/2 flex flex-col md:items-center text-white text-md md:text-xl os text-center">
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  InfoBot, a Creation of Fed up Computer Students.
                </h2>
                <p className="">
                  Tired of flipping through notes, and asking Classmates? Just
                  Search TopicWise with Keywords!
                </p>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Feeds on Simplicity, to deliver Concepts in Style
                </h2>
                <p className="">Organized, Checked and Colorful!!</p>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Learn by doing, not Memorizing
                </h2>
                <p className="">
                  Logic Explanations with no expectations to Memorize!!
                </p>
              </div>
              <div className="scale-90 p-2 rounded-lg hover:scale-100 hover:shadow-black hover:shadow-md transition-all ease-in duration-200 cursor-pointer pb-10">
                <h2 className="text-lg md:text-2xl text-yellow-400 font-bold">
                  Always Learning, Always Changing
                </h2>
                <p className="">
                  Constant Additions, Constant Improvements, Count on us to
                  always be Ready
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
