import { Grid } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import "./pages.css";
import Logo from "../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, db } from "../firebase.config";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
function Auth() {
  const [userTrue, setUserTrue] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(userTrue);
      console.log(user.displayName);
      if (user) {
        setUserTrue(true);
        getDocs();
        setTimeout(() => {
          window.location.assign("/off");
        }, 5000);
      }
    });
  });

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
    } else {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        CorrectQuestions: 0,
        WrongQuestions: 0,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        staff: false,
        userName: auth.currentUser.displayName,
      })
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const loaderChoice = (choice) => {
    if (choice === 1) return <Grid color="yellow" height="200" width="200" />;
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen relative w-full bg-neutral-800 text-center">
      <div className="h-screen w-fit border-4 border-white flex items-center justify-center rounded-lg p-2 bg-black md:m-10 md:w-full bg">
        <div className={"relative"}>
          <h1 className="text-4xl md:text-6xl text-white os font-bold">
            Login to Your Device
          </h1>
          <button
            className="os mt-10 text-2xl  bg-white scale-90 hover:scale-100 hover:bg-yellow-400  text-black-950 rounded-lg p-3 transition-all ease-in-out duration-300"
            onClick={loginwithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className="" /> Login with Google
          </button>
          <div className="flex flex-col items-center gap-5">
            <div className="relative top-10">
              {userTrue ? loaderChoice(1) : loaderChoice(0)}
            </div>
            <div className="max-h-28 w-28 relative top-16 hidden md:block">
              <img src={Logo} alt={Logo}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;