import React, { useState, useEffect } from "react";
import "../pages.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowAltCircleLeft,
  faEnvelope,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/fontawesome-free-solid";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Arinji from "./profiles/Arinji.png";
import Vedika from "./profiles/Vedika.png";
import Nilay from "./profiles/Nilay.png";
import Saesha from "./profiles/Saesha.png";

function Team() {
  const [opacity, setOpacity] = useState(
    "opacity-0 z-20 transition-all duration-500 ease-in-out m-2"
  );

  const [arrowRightRotate, setArrowRightRotate] = useState(
    "scale-90 hover:cursor-pointer"
  );
  const [arrowLeftRotate, setArrowLeftRotate] = useState(
    "scale-90 hover:cursor-pointer"
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
          <span className="text-white">Meet</span>{" "}
          <span className="text-yellow">the</span>{" "}
          <span className="text-white">InfoBot</span>{" "}
          <span className="text-yellow">Team</span>
        </h1>
        <h1 className="text-yellow-400 text-xl os text-center">
          The People Who Run InfoBot
        </h1>
        <div className="h-full w-screen flex flex-row flex-wrap md:flex-nowrap items-start justify-evenly mt-5">
          <p
            className="text-white text-2xl relative top-60 hidden md:block"
            onMouseOver={() => {
              setArrowLeftRotate(
                "fast-spin-left scale-100 hover:cursor-pointer"
              );
            }}
            onMouseOut={() => {
              setArrowLeftRotate("scale-90 hover:cursor-pointer");
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className={arrowLeftRotate} />
          </p>
          <Profile
            name={"Arinjay Dhar"}
            role={"Chief Executive Officer"}
            icon={Arinji}
            about={
              "Creator of the Site, Extroverted and Excited. Loves coding in React Js and aspires to work for Google. Exceptionally bad at Hindi and has a weird American Accent. Caffeinated 24/7."
            }
            insta={"https://www.instagram.com/34arinji/"}
            email={"mailto:arinjaydhar205@gmail.com"}
          />
          <Profile
            name={"Vedika Panjwani"}
            role={"Chief Operating Officer"}
            icon={Vedika}
            about={
              "An ambivert, someone with whom you become friends very easily. Hardcore bollywood fan and hence adapts to the situation easily. Loves computer applications, yellow lays and the sky.  "
            }
            insta={"https://www.instagram.com/vedika_panjwani/"}
            email={"mailto:vedikapanjwani115@gmail.com"}
          />
          <Profile
            name={"Nilay Bagchi"}
            role={"Chief Financial Officer"}
            icon={Nilay}
            about={
              "Calm, Cool and Collected. The chill guy you would go to when you feel low. Hopes for depression to be eradicated from the world,and does his best to help others against it.  "
            }
            insta={"https://www.instagram.com/34arinji/"}
            email={"mailto:arinjaydhar205@gmail.com"}
          />
          <Profile
            name={"Saesha Chaturvedi"}
            role={"Manager"}
            icon={Saesha}
            about={
              "Simple yet Marvelous. Always there to support all her peers, and never lets anyone feel left out. Hates holding grudges and is loved by everyone."
            }
            insta={"https://www.instagram.com/sash._14._/"}
            email={"mailto:arinjaydhar205@gmail.com"}
          />
          <p
            className="text-white text-2xl relative top-60 hidden md:block"
            onMouseOver={() => {
              setArrowRightRotate("fast-spin scale-100 hover:cursor-pointer");
            }}
            onMouseOut={() => {
              setArrowRightRotate("scale-90 hover:cursor-pointer");
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={arrowRightRotate}
            />
          </p>
          <div className="md:fixed  w-screen flex flex-row justify-evenly gap-5 text-white text-2xl p-2 border-4 border-b-0 border-white  md:p-0 md:border-0 md:border-none">
            <p
              className="text-white text-2xl  block md:hidden"
              onMouseOver={() => {
                setArrowLeftRotate(
                  "fast-spin-left scale-100 hover:cursor-pointer"
                );
              }}
              onMouseOut={() => {
                setArrowLeftRotate("scale-90 hover:cursor-pointer");
              }}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={arrowLeftRotate}
              />
            </p>
            <p
              className="text-white text-2xl  block md:hidden"
              onMouseOver={() => {
                setArrowRightRotate("fast-spin scale-100 hover:cursor-pointer");
              }}
              onMouseOut={() => {
                setArrowRightRotate("scale-90 hover:cursor-pointer");
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className={arrowRightRotate}
              />
            </p>
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

function Profile({ name, role, icon, about, insta, email }) {
  return (
    <div className="p-3 pb-5 transition-all ease-in-out duration-500 rounded-lg hover:shadow-lg hover:shadow-black hover:cursor-pointer text-center bg-black flex flex-col items-center group">
      <div className="relative text-transparent transition ease-in-out duration-500 group-hover:text-black">
        <img
          src={icon}
          alt={"Profile"}
          className="rounded-lg pb-3 w-60 aspect-square"
        ></img>
        <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
          <a href={email}>
            <FontAwesomeIcon icon={faEnvelope} className="" />
          </a>
        </div>
        <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
          <a href={insta} target="_blank" rel="noreferrer" className="">
            <FontAwesomeIcon icon={faInstagram} className="" />
          </a>
        </div>
      </div>
      <p className="self-stretch p-3 border-t-2 border-white text-xl text-white os font-bold">
        {name}
      </p>
      <p className="pb-3 text-yellow-500 text-lg os">{role}</p>
      <p className="w-56 break-words text-white os text-sm">{about}</p>
    </div>
  );
}
export default Team;
