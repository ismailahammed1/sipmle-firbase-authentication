// @ts-nocheck

import "./App.css";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase";
import { useState } from "react";
import React from "react";
import TailwindLogin from "./component/TailwindLogin/TailwindLogin";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //==========googleProvider=============
  const handelSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("this is error", error);
      });
  };
  const handelSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };
  //githubProvider=====================
  const handelSignInGit = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("this is error", error);
      });
  };
  const handelSignInFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("this is error", error);
      });
  };

  return (
    <div className="App">
      <TailwindLogin></TailwindLogin>
      <div>
        {user.uid ? (
          <button
            onClick={handelSignout}
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 w-40 mt-3"
          >
            Google signout
          </button>
        ) : (
          <>
            <button
              onClick={handelSignIn}
              className="transform rounded-sm  bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 w-40 mt-3"
            >
              Google signIn
            </button>
            <br />
            <button
              onClick={handelSignInGit}
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 w-40 mt-3"
            >
              gitHub signIn
            </button>
            <br />
            <button
              onClick={handelSignInFacebook}
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 w-40 mt-3"
            >
              Facebook signIn
            </button>
          </>
        )}
        {user.uid && (
          <div>
            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
            <p>{user.photoURL}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
