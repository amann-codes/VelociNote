"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen relative bg-lime-100">
      <div className="w-max h-max">
        <div className="flex flex-col justify-center items-center border-2 border-lime-600 p-7 rounded-xl">
          <p className="text-center text-black font-bold text-3xl font-mono">
            Welcome to VelociNote
          </p>
          <p className="text-center text-black font-bold text-3xl font-mono mt-5">
            Signup
          </p>
          <form className="flex flex-col w-[95%]">
            <label className="font-mono text-xl font-semibold mt-5 mb-2">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="dettolman"
              className="focuse:outline-1 focus:outline-lime-600 caret-lime-600 rounded-md bg-lime-100 px-4 py-3 font-mono font-semibold text-lime-800 placeholder:text-lime-600 placeholder:font-mono border-2 border-lime-500"
            ></input>
            <label className="font-mono text-xl font-semibold mt-5 mb-2">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="user12@sdf.com"
              className="focuse:outline-1 focus:outline-lime-600 caret-lime-600 rounded-md bg-lime-100 px-4 py-3 font-mono font-semibold text-lime-800 placeholder:text-lime-600 placeholder:font-mono border-2 border-lime-500"
            ></input>
            <label className="font-mono text-xl font-semibold mt-3 mb-2">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Fdfr@134$$"
              className="focuse:outline-1 focus:outline-lime-600 caret-lime-600 rounded-md bg-lime-100 px-4 py-3 font-mono font-semibold text-lime-800 placeholder:text-lime-600 placeholder:font-mono border-2 border-lime-500"
            ></input>
          </form>
          <button
            onClick={async () => {
              const res = await fetch("/api/createUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name,
                  email,
                  password,
                }),
              });
              console.log({ name, email, password });
              console.log(res);
              router.push('/')
            }}
            className="w-[95%] mt-5 bg-lime-600 rounded-md py-2 font-mono font-semibold text-lg text-white active:text-lime-600 active:bg-lime-100"
          >
            Create you account
          </button>
        </div>
      </div>
    </div>
  );
}
