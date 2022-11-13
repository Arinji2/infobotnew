import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { db } from "../../firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowAltCircleLeft,
} from "@fortawesome/fontawesome-free-solid";
import { getDoc, doc } from "firebase/firestore";
function Loops() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [logic, setLogic] = useState("");
  const [ready, setReady] = useState(false);
  const [opacity, setOpacity] = useState(
    "opacity-0 z-20 transition-all duration-500 ease-in-out m-2"
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    getLocations();
    setTimeout(() => {
      setOpacity("opacity-100 z-20 transition-all duration-500 ease-in-out");
    }, 500);
  }, []);
  const getLocations = async () => {
    const docRef = doc(db, "locations", "loops");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data().paths);
    setData(docSnap.data().paths);
  };

  const getFile = async (text) => {
    console.log(text);
    const docRef = doc(db, "loops", text);
    const docSnap = await getDoc(docRef);
    setTitle(docSnap.data().title);
    setCode(docSnap.data().code);
    setExplanation(docSnap.data().explanation);
    setLogic(docSnap.data().logic);
    setReady(true);
  };

  const formatResult = (item) => {
    return (
      <>
        <span
          style={{
            display: "block",
            textAlign: "left",
            color: "#facc15",
            cursor: "pointer",
          }}
        >
          {item.name}
        </span>
      </>
    );
  };

  const onSelect = (item) => {
    getFile(item.name);
  };
  function Input() {
    return (
      <div className="flex flex-col items-center justify-center m-5">
        <div className="hidden md:block" style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data}
            styling={{
              zIndex: 4,
              color: "#facc15",
              fontFamily: "Silkscreen",
              backgroundColor: "black",
              hoverBackgroundColor: "#262626",
            }}
            autoFocus
            formatResult={formatResult}
            onSelect={onSelect}
            onSearch={onSelect}
            placeholder="Armstrong"
          />
        </div>
        <div className="block md:hidden" style={{ width: 300 }}>
          <ReactSearchAutocomplete
            items={data}
            styling={{
              zIndex: 4,
              color: "#facc15",
              fontFamily: "Silkscreen",
              backgroundColor: "black",
              hoverBackgroundColor: "#262626",
            }}
            autoFocus
            formatResult={formatResult}
            onSelect={onSelect}
            onSearch={onSelect}
            placeholder="Armstrong"
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className={
          ready
            ? "h-fit w-screen border-b-0 md:border-b-4 md:rounded-lg border-4 border-white flex justify-center p-2 bg"
            : "h-screen w-screen border-b-0 md:border-b-4 md:rounded-lg border-4 border-white flex justify-center p-2 bg"
        }
      >
        <div className={opacity}>
          <div className="text-white z-30">
            <div>
              <h1 className="text-yellow-400 os text-4xl text-center">Loops</h1>
              <h2 className="text-white os text-2xl text-center">
                Powered by InfoBot
              </h2>
              <Input />
              {ready ? (
                <Post
                  title={title}
                  code={code}
                  explanation={explanation}
                  logic={logic}
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center os mt-4 gap-9 md:gap-10 md:w-2/4 text-center">
                    <h1 className="text-white text-2xl">
                      Type to Start Searching!
                    </h1>

                    <h2 className="text-2xl text-yellow-400">
                      How does the InfoBot Search Work?
                    </h2>

                    <p>
                      Just start typing in the Search Box with keywords related
                      to the topic and watch InfoBot suggest you other keywords
                      based on what you type.
                    </p>
                    <div className="">
                      <h3 className="text-md md:text-xl text-green-400">
                        Each Program is setup in the following Format
                      </h3>
                      <div className="flex flex-row items-center justify-evenly gap-4 flex-wrap ">
                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-400">1.</span>Title
                        </h1>

                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-400">2.</span>Explanation
                        </h1>
                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-400">3.</span>Code
                        </h1>
                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-400">4.</span>Logic
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {ready ? (
                <div className=" md:relative mt-10 w-screen flex flex-row justify-evenly gap-5 text-white text-2xl p-2 border-4 border-white rounded-lg md:p-0 md:border-0 md:border-none">
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
              ) : (
                <div className=" md:fixed md:bottom-10 w-screen flex flex-row justify-evenly md:gap-5 text-white text-2xl p-2 border-4 border-white rounded-lg md:p-0 md:border-0 md:border-none">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Post({ title, code, explanation, logic }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="os flex flex-col items-center justify-center w-4/5 gap-7 text-yellow-400">
        <h1
          className="text-2xl md:text-3xl text-center  "
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <h1
          className="text-sm md:text-xl text-center "
          dangerouslySetInnerHTML={{ __html: explanation }}
        ></h1>
        <h1
          className=" text-sm bg-black p-5 rounded-lg text-white"
          dangerouslySetInnerHTML={{ __html: code }}
        ></h1>

        <h1
          className="text-sm md:text-lg text-center "
          dangerouslySetInnerHTML={{ __html: logic }}
        ></h1>
      </div>
    </div>
  );
}

export default Loops;
