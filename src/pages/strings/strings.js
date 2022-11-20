import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { db } from "../../firebase.config";

import { getDoc, doc } from "firebase/firestore";
function Strings() {
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
    const docRef = doc(db, "locations", "strings");
    const docSnap = await getDoc(docRef);
    setData(docSnap.data().paths);
    console.log(docSnap.data());
  };

  const getFile = async (text) => {
    const docRef = doc(db, "strings", text);
    const docSnap = await getDoc(docRef);
    console.log(text);
    console.log(docSnap.exists());
    setTitle(docSnap.data().title);
    formatCode(docSnap.data().code);
    setExplanation(docSnap.data().explanation);
    setLogic(docSnap.data().logic);
    setReady(true);
  };

  const formatCode = (code) => {
    let formattedCode = "";
    for (let i = 0; i < code.length; i++) {
      let letter = code.charAt(i);
      if (letter === "{") {
        formattedCode += '<div class="text-green-400">{</div>';
      } else if (letter === "}") {
        formattedCode += '<div class="text-red-400">}</div>';
      } else if (letter === ";") {
        formattedCode += '<span class="text-blue-400">;</span>';
      } else if (letter === ")" || letter === "(") {
        formattedCode += `<span class="text-yellow-400">${letter}</span>`;
      } else formattedCode += letter;
    }
    setCode(formattedCode);
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
            placeholder="Binary Search"
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
            maxResults={10}
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
            : "h-fit md:h-screen w-screen border-b-0 md:border-b-4 md:rounded-lg border-4 border-white flex justify-center p-2 bg"
        }
      >
        <div className={opacity}>
          <div className="text-white z-30">
            <div>
              <h1 className="text-yellow-400 os text-4xl text-center">
                Strings
              </h1>
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
                  <div className="flex flex-col items-center justify-center os m-4 gap-9  md:w-2/4 text-center">
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
                        Each Program is setup in the following Format <br />{" "}
                        (Ps: Take Note of the different Shades)
                      </h3>
                      <div className="flex flex-row items-center justify-evenly gap-4 flex-wrap ">
                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-500">1.</span>Title
                        </h1>

                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-400">2.</span>Explanation
                        </h1>
                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-300">3.</span>Code
                        </h1>
                        <h1 className="text-md md:text-lg shadow-md shadow-black p-2 rounded-lg">
                          <span className="text-yellow-200">4.</span>Logic
                        </h1>
                      </div>
                    </div>
                    <div className="hidden  w-[90vw] md:flex flex-row items-center gap-4 ">
                      <div className="w-2/3 shadow-2xl shadow-black p-2 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 hover:cursor-pointer">
                        <h2 className="text-yellow-500 text-xl">Title</h2>
                        <p>
                          The Title of the Program is the Name of it. For easier
                          access the Keyword for InfoBot Search is the title of
                          the Program.
                        </p>
                      </div>
                      <div className="w-2/3 shadow-2xl shadow-black p-2 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 hover:cursor-pointer">
                        <h2 className="text-yellow-400 text-xl">Explanation</h2>
                        <p>
                          The Explanation of the Program gives an overview of
                          what the Question wants us to do.
                        </p>
                      </div>
                      <div className="w-2/3 shadow-2xl shadow-black p-2 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 hover:cursor-pointer">
                        <h2 className="text-yellow-300 text-xl">Code</h2>
                        <p>
                          The Code is the Java Code which solves the program. It
                          is all checked and re checked so feel free to just
                          copy paste it.
                        </p>
                      </div>
                      <div className="w-2/3 shadow-2xl shadow-black p-2 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 hover:cursor-pointer">
                        <h2 className="text-yellow-200 text-xl">Logic</h2>
                        <p>
                          The Logic of the Program are the methods and steps
                          taken to solve the program by the writers.
                        </p>
                      </div>
                    </div>
                  </div>
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
      <div className="os flex flex-col items-center justify-center w-4/5 gap-7">
        <h1
          className="text-2xl md:text-3xl text-center  text-yellow-500 "
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <h1
          className="text-sm md:text-xl text-center  text-yellow-400 "
          dangerouslySetInnerHTML={{ __html: explanation }}
        ></h1>
        <h1
          className=" text-sm bg-black p-5 rounded-lg  text-yellow-300"
          dangerouslySetInnerHTML={{ __html: code }}
        ></h1>

        <h1
          className="text-sm md:text-lg text-center  text-yellow-200 "
          dangerouslySetInnerHTML={{ __html: logic }}
        ></h1>
      </div>
    </div>
  );
}

export default Strings;
