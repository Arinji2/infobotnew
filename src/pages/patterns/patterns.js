import React, { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import { getDoc, doc } from "firebase/firestore";
import { Oval } from "react-loader-spinner";

import "../pages.css";
function Patterns() {
  const [data, setData] = useState([]);
  const [choice, setChoice] = useState("");
  const [logic, setLogic] = useState("");
  const [code, setCode] = useState("");
  const [file, setFile] = useState(false);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const docRef = doc(db, "locations", "patterns");
    const dataConst = await getDoc(docRef);
    setData(dataConst.data().files);
  };

  useEffect(() => {
    if (choice !== "") checkChoice();
    // eslint-disable-next-line
  }, [choice]);
  const checkChoice = async () => {
    var docRef = doc(db, "locations", "patterns");
    const num = data.indexOf(choice).toString();
    docRef = doc(db, "patterns", num);
    const file = await getDoc(docRef);

    let code = file.data().code;
    formatCode(code);
    setLogic(file.data().logic);
    setFile(true);
  };

  const formatCode = (code) => {
    let formattedCode = "";
    for (let i = 0; i < code.length; i++) {
      let letter = code.charAt(i);
      if (letter === "{") {
        formattedCode += '<span class="text-green-400">{</span>';
      } else if (letter === "}") {
        formattedCode += '<span class="text-red-400">}</span>';
      } else if (letter === ";") {
        formattedCode += '<span class="text-blue-400">;</span>';
      } else if (letter === ")" || letter === "(") {
        formattedCode += `<span class="text-yellow-400">${letter}</span>`;
      } else formattedCode += letter;
    }
    setCode(formattedCode);
  };

  return (
    <div
      className={
        file
          ? "flex flex-col items-center h-fit w-screen bg os"
          : "flex flex-col items-center h-full w-screen bg os"
      }
    >
      <h1 className="text-yellow-400 os text-4xl text-center">Patterns</h1>
      <h2 className="text-white os text-2xl text-center">Powered by InfoBot</h2>
      {data.length > 0 ? (
        <></>
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <Oval
            color="yellow"
            secondaryColor="transparent"
            height="200"
            width="200"
          />
        </div>
      )}
      <div
        className={
          file
            ? "hidden"
            : "flex flex-row items-center justify-evenly flex-wrap w-screen"
        }
      >
        {data.map((item) => {
          return (
            <li
              className="text-white list-none bg-black p-2 rounded-lg w-28 h-38 z-30 text-xl hover:cursor-pointer scale-90 hover:scale-100 hover:shadow-lg hover:shadow-black transition-all ease-in-out duration-300"
              dangerouslySetInnerHTML={{ __html: item }}
              key={item}
              onClick={() => {
                setChoice(item);
              }}
            ></li>
          );
        })}
      </div>
      <div className={file ? "block" : "hidden"}>
        <Post
          code={code}
          display={choice}
          logic={logic}
          setFile={setFile}
          setChoice={setChoice}
        />
      </div>
    </div>
  );
}

function Post({ code, display, logic, setFile, setChoice }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <div className="os flex flex-col items-center justify-center w-4/5 gap-7 ">
        <h1
          className="text-2xl md:text-3xl text-center  text-yellow-500 shadow-md shadow-black z-50 p-2 rounded-lg"
          dangerouslySetInnerHTML={{ __html: display }}
        ></h1>
        <h1
          className=" text-sm bg-black p-5 rounded-lg text-white  z-50"
          dangerouslySetInnerHTML={{ __html: code }}
        ></h1>
        <h1
          className="text-sm md:text-lg text-center  text-yellow-200 z-50"
          dangerouslySetInnerHTML={{ __html: logic }}
        ></h1>
        <p
          className="text-white bg-yellow-500 border-2 border-yellow-500 p-2 rounded-lg hover:scale-90 scale-100 z-50 mb-5 transition-all ease-in-out duration-300 hover:cursor-pointer"
          onClick={() => {
            setFile(false);
            setChoice("");
          }}
        >
          Back to List
        </p>
      </div>
    </div>
  );
}

export default Patterns;
