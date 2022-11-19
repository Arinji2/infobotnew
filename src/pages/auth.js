import { Oval } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import "./pages.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, db } from "../firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
function Auth() {
  const [userTrue, setUserTrue] = useState(false);
  const [visibilty, setVisibilty] = useState(
    "relative bottom-20 flex flex-col items-center justify-start opacity-0"
  );
  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setVisibilty(
      "relative h-full flex flex-col items-center justify-center opacity-100 transition-all ease-in-out duration-700 z-30"
    );
  });

  const createUser = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (username.length === 0) {
      setError(true);
      setErrorMessage("Please input a Username to Create an Account");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError(false);
        sendEmailVerification(auth.currentUser);
        getLoginDocs(username);
      })
      .catch((error) => {
        setError(true);
        if (error.code === "auth/email-already-in-use")
          setErrorMessage(
            "Email Already Exists, please Login or Check the Email"
          );
        else if (error.code === "auth/invalid-password")
          setErrorMessage(
            "Password Invalid, Password must have atleast 6 letters"
          );
        else if (error.code === "auth/weak-password")
          setErrorMessage("Weak Password");
        else if (error.code === "auth/internal-error")
          setErrorMessage("An Internal Error has Occurred, Try again later");
        else if (error.code === "auth/invalid-email")
          setErrorMessage("Email Invalid, Please try Again");
        else setErrorMessage(error.code);
      });
  };

  const loginUser = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        setError(false);
        setUserTrue(true);
        setTimeout(() => {
          window.location.assign("/phone");
        }, 1000);
      })
      .catch((error) => {
        setError(true);
        if (error.code === "auth/wrong-password")
          setErrorMessage("Incorrect Password");
        else if (error.code === "auth/invalid-email")
          setErrorMessage("Email Invalid, Please try Again");
        else if (error.code === "auth/internal-error")
          setErrorMessage("An Internal Error has Occurred, Try again later");
        else setErrorMessage(error.code);
      });
  };
  const loginwithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        getDocs();
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };

  const getDocs = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setError(false);
      setUserTrue(true);
      setTimeout(() => {
        window.location.assign("/phone");
      }, 1000);
    } else {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        CorrectQuestions: 0,
        WrongQuestions: 0,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        staff: false,
        writer: false,
        verifier: false,
        developer: false,
        executive: false,
        coins: 0,
        premium: false,
        userName: auth.currentUser.displayName,
      })
        .then(() => {
          setError(false);
          setUserTrue(true);
          setTimeout(() => {
            window.location.assign("/phone");
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getLoginDocs = async (username) => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      CorrectQuestions: 0,
      WrongQuestions: 0,
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
      staff: false,
      writer: false,
      verifier: false,
      developer: false,
      executive: false,
      coins: 0,
      premium: false,
      userName: auth.currentUser.displayName,
    })
      .then(() => {
        setError(false);
        setUserTrue(true);
        setTimeout(() => {
          window.location.assign("/phone");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loaderChoice = (choice) => {
    if (choice === 1)
      return (
        <div className=" absolute bottom-44">
          <Oval
            color="yellow"
            secondaryColor="transparent"
            height="100"
            width="100"
          />{" "}
        </div>
      );
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen relative w-full bg-neutral-800 text-center opacity-100 transition-all ease-in-out duration-500">
      <div className="h-screen w-fit border-4 border-white flex items-end justify-center rounded-lg p-2  md:w-full bg os">
        <div className={visibilty}>
          <h1 className="text-4xl md:text-6xl text-yellow-400 os font-bold mb-5 mt-10">
            Login to Your Device
          </h1>
          <input
            type={"text"}
            placeholder={"Email Id"}
            className="bg-transparent w-[80vw] p-2 rounded-lg shadow-md shadow-black outline-none text-white mb-5"
            id="email"
          ></input>
          <input
            type={"password"}
            placeholder={"Password"}
            className="bg-transparent w-[50vw] md:w-[20vw] p-2 rounded-lg shadow-md shadow-black outline-none text-white"
            id="password"
          ></input>
          <input
            type={"text"}
            placeholder={"Username (Needed to Sign In)"}
            className="bg-transparent w-[80vw] p-2 rounded-lg shadow-md shadow-black outline-none text-white mb-5"
            id="username"
          ></input>
          <div className="flex flex-row items-center justify-evenly w-screen">
            <button
              className="os mt-10 text-2xl  hover:bg-white scale-100 bg-yellow-500  text-white hover:text-yellow-500 rounded-lg p-3 transition-all ease-in-out duration-300"
              onClick={createUser}
            >
              Sign Up
            </button>
            <button
              className="os mt-10 text-2xl  hover:bg-white scale-100 bg-yellow-500  text-white hover:text-yellow-500 rounded-lg p-3 transition-all ease-in-out duration-300"
              onClick={loginUser}
            >
              Login
            </button>
          </div>
          {error ? (
            <ErrorHandles errorMessage={errorMessage} />
          ) : (
            <div className="invisible h-36 w-[90vw] md:w-[70vw]">
              <ErrorHandles errorMessage={errorMessage} />
            </div>
          )}
          {userTrue ? loaderChoice(1) : loaderChoice(0)}
          <button
            className="os mt-10 text-xl  hover:bg-white scale-100 bg-yellow-500  text-white hover:text-yellow-500 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={loginwithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className="" /> Login with Google
          </button>

          <div className="flex flex-col items-center gap-5">
            <div className="relative top-10 h-28 w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorHandles({ errorMessage }) {
  return (
    <div className="flex flex-col items-center justify-center m-5 ">
      <div className="bg-red-500 p-2 rounded-lg h-24 w-[90vw] md:w-[70vw]">
        <h1 className="md:text-2xl text-white">An Error Has Occurred</h1>

        <p className="md:text-xl text-black">{errorMessage}</p>
      </div>
    </div>
  );
}

export default Auth;
