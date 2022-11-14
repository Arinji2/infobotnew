import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowAltCircleLeft,
} from "@fortawesome/fontawesome-free-solid";
function Footer() {
  return (
    <React.Fragment>
      <div className=" static bottom-0 w-screen flex flex-row justify-evenly gap-5 text-white text-2xl p-2  z-30 border-4 border-white md:border-t-4">
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
    </React.Fragment>
  );
}

export default Footer;
