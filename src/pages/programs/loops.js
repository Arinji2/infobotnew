import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { db } from "../../firebase.config";

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
      <div className="">
        <div
          className="hidden md:block"
          style={{
            marginBottom: 20,
            width: 500,
            backgroundColor: "#facc15",
          }}
        ></div>
        <div
          className="block md:hidden"
          style={{
            marginBottom: 20,
            width: 300,
            backgroundColor: "#facc15",
          }}
        ></div>
        <div className="os">
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
              <Input />
              {ready ? (
                <Post
                  title={title}
                  code={code}
                  explanation={explanation}
                  logic={logic}
                />
              ) : (
                <></>
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
