import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBidIYxmER28Jqw4ztc_OEydKbpFN88oBk",
  authDomain: "auth.infobot.tech",
  projectId: "auth-2216a",
  storageBucket: "auth-2216a.appspot.com",
  messagingSenderId: "83891577277",
  appId: "1:83891577277:web:7310a3bf356a8741aa72d4",
  measurementId: "G-LNP1LXXGC4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
