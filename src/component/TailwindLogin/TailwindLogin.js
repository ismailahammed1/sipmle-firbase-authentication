import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase";

const auth = getAuth(app);

const TailwindLogin = () => {
  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value;
    const password = e.target.elements.password?.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("this is error", error);
      });
  };
  return (
    <div>
      <form
        onSubmit={handelRegister}
        className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
      >
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email or Username"
              name="email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              required
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              required
            />
          </div>

          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            LOG IN
          </button>
        </section>
      </form>
    </div>
  );
};
export default TailwindLogin;
