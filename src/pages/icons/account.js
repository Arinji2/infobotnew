import React, { useState, useEffect } from "react";
import "../pages.css";
import Profile from "../../assets/profile.svg";
import { db, auth } from "../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../../components/footer";
import { Oval } from "react-loader-spinner";

function Account() {
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [userName, setUserName] = useState("");
  const [opacity, setOpacity] = useState(
    "opacity-0 z-20 transition-all duration-500 ease-in-out m-2"
  );

  const getData = async () => {
    const docsRef = doc(db, "users", auth.currentUser.uid);
    const data = await getDoc(docsRef);
    console.log(data.data());
    setEmail(data.data().email);
    setUserName(data.data().userName);
    setCorrect(data.data().CorrectQuestions);
    setWrong(data.data().WrongQuestions);
    setReady(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpacity("opacity-100  transition-all duration-500 ease-in-out");
    }, 500);
  });

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      getData();
    });
  });
  return (
    <React.Fragment>
      <div className="h-screen md:h-screen w-screen border-b-0 md:border-b-4 md:rounded-lg border-4 border-white justify-center p-2 bg os flex">
        <div className={opacity}>
          <h1 className="text-yellow-400 text-4xl font-extrabold text-center">
            Manage Your Account
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-around w-[98vw] h-screen">
            <div className="w-[50%]">
              {ready ? (
                <div className="text-white text-2xl flex flex-col items-center justify-center gap-10">
                  <h1 className="text-[3vw] md:text-2xl md:w-auto w-[90vw] text-center">
                    UserName:{" "}
                    <span className="text-yellow-400">{userName}</span>{" "}
                  </h1>
                  <h1 className="text-[3vw] md:text-2xl md:w-auto w-[90vw] text-center">
                    Email: <span className="text-yellow-400">{email}</span>
                  </h1>
                  <div className="flex flex-row items-center justify-evenly md:text-lg text-sm gap-5">
                    <Question name={"Correct Questions"} data={correct} />
                    <Question name={"Wrong Questions"} data={wrong} />
                    <Question name={"Total Questions"} data={wrong + correct} />
                  </div>
                  <p
                    className="bg-yellow-500 p-2 rounded-lg border-yellow-500 border-2 hover:bg-white hover:text-yellow-500 text-xl transition-all ease-[cubic-bezier(.26,.83,.86,.75)] duration-300 hover:cursor-pointer"
                    onClick={() => {
                      signOut(auth);
                      window.location.assign("/auth");
                    }}
                  >
                    Sign Out
                  </p>
                </div>
              ) : (
                <div className=" flex flex-col items-center justify-center">
                  <Oval
                    color="yellow"
                    secondaryColor="transparent"
                    height={"200"}
                    width={"200"}
                  />
                </div>
              )}
            </div>
            <div className="w-[50%] h-[50%] mb-10 pb-10 md:mb-0 md:pb-0">
              <img src={Profile} alt={"Profile"} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

function Question({ name, data }) {
  return (
    <div className="flex flex-col p-2 items-center shadow-md shadow-black rounded-lg bg-slate-700">
      <p>{name}</p>
      <p className="text-yellow-400">{data}</p>
    </div>
  );
}

export default Account;
