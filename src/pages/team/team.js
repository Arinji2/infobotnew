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
import Aryan from "./profiles/Aryan.png";
import Aarav from "./profiles/Aarav.png";
import Aditya from "./profiles/Aditya.png";
import Anwesha from "./profiles/Anwesha.png";
import Kunsh from "./profiles/Kunsh.png";
import Lath from "./profiles/Lath.png";
import Dhanvin from "./profiles/Dhanvin.png";
import Vedant from "./profiles/Vedant.png";
import Neel from "./profiles/Neel.png";
import Shreshth from "./profiles/Shreshth.png";
import Rishi from "./profiles/Rishi.png";
import Siddhartha from "./profiles/Siddhartha.png";
import Tashvi from "./profiles/Tashvi.png";
import Yuvraj from "./profiles/Yuvraj.png";
import Nikhilesh from "./profiles/Nikhilesh.png";

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

  const [mode, setMode] = useState("fadeInRightBig");

  const [page, setPage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity("opacity-100 z-20 transition-all duration-500 ease-in-out");
    }, 500);
  });

  const renderPage = (option) => {
    if (option === 0) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
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
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
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
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
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
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-4s"
            }
          >
            <Profile
              name={"Saesha Chaturvedi"}
              role={"Human Resources Manager"}
              icon={Saesha}
              about={
                "Simple yet Marvelous. Always there to support all her peers, and never lets anyone feel left out. Hates holding grudges and is loved by everyone."
              }
              insta={"https://www.instagram.com/sash._14._/"}
              email={"mailto:arinjaydhar205@gmail.com"}
            />
          </div>
        </div>
      );
    } else if (option === 1) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
            <Profile
              name={"Aryan Pandey"}
              role={"CSO"}
              icon={Aryan}
              about={
                "An Awesome Dude, Exceptionally good at Computers. Could take over the world if he wanted, but is too lazy. Can go from your best friend to your worst enemy with the snap of a finger."
              }
              insta={"https://www.instagram.com/_superscene_/"}
              email={"mailto:ARyanpandey2307@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
            <Profile
              name={"Aarav Mehta"}
              role={"Donator"}
              icon={Aarav}
              about={
                "Prime Example of a true friend. If one homeless person was given a home for every time Aarav is seen not smiling, homelessness would still be a thing "
              }
              insta={"https://www.instagram.com/aaravm007/"}
              email={"mailto:mehta.aarav12345@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
            <Profile
              name={"Adiyta Manthalkar"}
              role={"Donator"}
              icon={Aditya}
              about={
                "Words cannot describe, the vibes of this legend. Feeling bored is an alien topic when around him. Aditya is the type of person to look at things and somehow give it a more, sinister meaning."
              }
              insta={"https://www.instagram.com/adi_cr7_officials/"}
              email={"mailto:manthalkaraditya07@gmail.com"}
            />
          </div>
        </div>
      );
    } else if (option === 2) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
            <Profile
              name={"Anwesha Roy"}
              role={"Head of Programs"}
              icon={Anwesha}
              about={
                "Lazy but also Energetic when the time presents itself. Loves Coffee and could not survive without it. Loves to Gossip and is exceptionally bad at keeping secrets. But Awesome and Lovely in the end."
              }
              insta={"https://www.instagram.com/anweshaa_99/"}
              email={"mailto:anweshar040@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
            <Profile
              name={"Kunsh Merhotra"}
              role={"Head of Verification"}
              icon={Kunsh}
              about={
                " An introvert and hilarious dude who can sometimes be creative. Co-operative to work with others and born ready to learn and try new things. Loves to play games and work out."
              }
              insta={"https://www.instagram.com/kunsh_mehrotra16/"}
              email={"mailto:kunsh.mehrotra@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
            <Profile
              name={"Aarav Lath"}
              role={"Head of PTO's"}
              icon={Lath}
              about={
                "Organized mess. 2 words that perfectly describe him. He is extroverted and in a good mood practically all the time. Procrastination is his 2nd name."
              }
              insta={"https://www.instagram.com/aarav.lath/"}
              email={"mailto:arinjaydhar205@gmail.com"}
            />
          </div>
        </div>
      );
    } else if (option === 3) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
            <Profile
              name={"Arinjay Dhar"}
              role={"Main Developer"}
              icon={Arinji}
              about={
                "Creator of the Site, Extroverted and Excited. Loves coding in React Js and aspires to work for Google. Exceptionally bad at Hindi and has a weird American Accent. Caffeinated 24/7."
              }
              insta={"https://www.instagram.com/34arinji/"}
              email={"mailto:arinjaydhar205@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
            <Profile
              name={"Dhanvin Nair"}
              role={"Junior Developer"}
              icon={Dhanvin}
              about={
                "Extroverted and always cheerful. Loves spreading Positive Vibes. Enjoys coding and developing new things. New to the field of React. Experienced in Java."
              }
              insta={"https://www.instagram.com/infobotofficial/"}
              email={"mailto:dhanvinnair11@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
            <Profile
              name={"Vedant Iyengar"}
              role={"Junior Developer"}
              icon={Vedant}
              about={
                "A person guided by discipline and master skills. Understanding, supportive and a true friend with an amazing sense of humor. Never fears to face what" +
                "s coming."
              }
              insta={"https://www.instagram.com/infobotofficial/"}
              email={"mailto:vedant.iyengar0307@gmail.com"}
            />
          </div>
        </div>
      );
    } else if (option === 4) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
            <Profile
              name={"Kunsh Mehrotra"}
              role={"Head Verifier"}
              icon={Kunsh}
              about={
                "An introvert and hilarious dude who can sometimes be creative. Co-operative to work with others and born ready to learn and try new things. Loves to play games and work out.   "
              }
              insta={"https://www.instagram.com/kunsh_mehrotra16/"}
              email={"mailto:kunsh.mehrotra@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
            <Profile
              name={"Neel Abhyankar"}
              role={"Verifier"}
              icon={Neel}
              about={
                '"A regular teen with a laptop can do anything!" thats the motto I live by. Be working on my socializing skills on the daily and helping out my friends when they need it.'
              }
              insta={"https://www.instagram.com/neel_abhyankar/"}
              email={"mailto:neelabhyankar357@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
            <Profile
              name={"Shreshth Shetty"}
              role={"Verifier"}
              icon={Shreshth}
              about={
                "A proud foody with semi uncle jokes clogged up in the head. Quite miser but also helpful at the same time. A perfectionist who would rather spend an hour writing a title than write the project."
              }
              insta={"https://www.instagram.com/infobotofficial/"}
              email={"mailto:shreshth.shetty007@gmail.com"}
            />
          </div>
        </div>
      );
    } else if (option === 5) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
            <Profile
              name={"Anwesha"}
              role={"Head of Programs"}
              icon={Anwesha}
              about={
                "Lazy but also Energetic when the time presents itself. Loves Coffee and could not survive without it. Loves to Gossip and is exceptionally bad at keeping secrets. But Awesome and Lovely in the end."
              }
              insta={"https://www.instagram.com/anweshaa_99/"}
              email={"mailto:anweshar040@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
            <Profile
              name={"Aarav"}
              role={"Head of PTO's"}
              icon={Lath}
              about={
                "Organized mess. 2 words that perfectly describe him. He is extroverted and in a good mood practically all the time. Procrastination is his 2nd name."
              }
              insta={"https://www.instagram.com/aarav.lath/"}
              email={"mailto:arinjaydhar205@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
            <Profile
              name={"Rishi"}
              role={"Sr Writer"}
              icon={Rishi}
              about={
                "An extrovert and always cool.Understanding, supportive and a true friend. Wishes to become an entrepreneur in future.Always has your back with last minute revisions."
              }
              insta={"https://www.instagram.com/rishi.jasrapuria/"}
              email={"mailto:jasrapuriarishi@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-4s"
            }
          >
            <Profile
              name={"Siddhartha"}
              role={"Sr Writer"}
              icon={Siddhartha}
              about={
                "Disciplined but also Fun. Always has your back with last minute revision. Remembers things constantly and tries to lift the heavy list of Studies from his friends."
              }
              insta={"https://www.instagram.com/infobotofficial/"}
              email={"mailto:siddharthan2217@gmail.com"}
            />
          </div>
        </div>
      );
    } else if (option === 6) {
      return (
        <div
          className="flex flex-row  flex-wrap md:flex-nowrap items-center justify-center gap-5 relative"
          id="prf-b"
        >
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-1s"
            }
          >
            <Profile
              name={"Tashvi"}
              role={"Jr Writer"}
              icon={Tashvi}
              about={
                "Introvert, is a bit shy but when you get to know her, is a total sunshine. Annoying but fun and lives in her own fantasy. Obsessed with fictional men and romance books. A Korean devotee."
              }
              insta={"https://www.instagram.com/tashvidoshi/"}
              email={"mailto:tashvidoshi@gmail.com"}
            />
          </div>
          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-2s"
            }
          >
            <Profile
              name={"Nikhilesh"}
              role={"Jr Writer"}
              icon={Nikhilesh}
              about={
                "Joyous and Meritorious. Loves challenges and also a social bird. Can make friends with practically anyone. You can always count on him to support all your crazy ideas."
              }
              insta={"https://www.instagram.com/infobotofficial/"}
              email={"mailto:nikhileshsuresh8@gmail.com"}
            />
          </div>

          <div
            className={
              "animate__animated animate__" + mode + " animate__delay-3s"
            }
          >
            <Profile
              name={"Yuvraj"}
              role={"Jr Writer"}
              icon={Yuvraj}
              about={
                "Man with a vision, wishes to become an entrepreneur.Got simple hobbies of a twenty year old like jogging and watching anime. Always interested in big projects. Friendly, humble and sweet."
              }
              insta={"https://www.instagram.com/yuvikedia_19/"}
              email={"mailto:yuvrajkedia07@gmail.com"}
            />
          </div>
        </div>
      );
    }
  };

  const renderHeading = (option) => {
    switch (option) {
      case 0:
        return "The People who Run InfoBot";
      case 1:
        return "The People who Support InfoBot";
      case 2:
        return "The Heads of the Departments";
      case 3:
        return "The Developers of InfoBot";
      case 4:
        return "The Verifiers of InfoBot";
      case 5:
        return "The Writers of InfoBot";
      default:
        return "The Writers of InfoBot";
    }
  };
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
          {true ? renderHeading(page) : null}
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
            onClick={() => {
              if (page !== 0) {
                setMode("fadeOutRightBig");
                setTimeout(() => {
                  setPage(page - 1);
                  setMode("fadeInLeftBig");
                }, 2400);
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className={arrowLeftRotate} />
          </p>
          {true ? renderPage(page) : null}
          <p
            className="text-white text-2xl relative top-60 hidden md:block"
            onMouseOver={() => {
              setArrowRightRotate("fast-spin scale-100 hover:cursor-pointer");
            }}
            onMouseOut={() => {
              setArrowRightRotate("scale-90 hover:cursor-pointer");
            }}
            onClick={() => {
              if (page !== 6) {
                setMode("fadeOutLeftBig");
                setTimeout(() => {
                  setPage(page + 1);
                  setMode("fadeInRightBig");
                }, 2000);
              }
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
              onClick={() => {
                if (page !== 0) {
                  setMode("fadeOutRightBig");
                  setTimeout(() => {
                    setPage(page - 1);
                    setMode("fadeInLeftBig");
                  }, 2000);
                }
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
              onClick={() => {
                if (page !== 6) {
                  setMode("fadeOutLeftBig");
                  setTimeout(() => {
                    setPage(page + 1);
                    setMode("fadeInRightBig");
                  }, 2400);
                }
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
