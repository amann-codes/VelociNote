"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen relative bg-[#F0F4F8]">
      <div className="w-max h-max">
        <div className="flex flex-col justify-center items-center border-2 border-[#CCCCCC] p-7 rounded-xl">
          <p className="text-center text-black font-bold text-3xl font-mono">
            Welcome to VelociNote
          </p>
          <p className="text-center text-black font-bold text-4xl font-mono mt-5">
            Signup
          </p>
          <form className="flex flex-col w-full">
            <label className="font-mono text-xl font-semibold mt-5 mb-2">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="dettolman"
              className="w-full flex flex-row justify-center items-center border-2 border-[#CCCCCC] bg-white px-4 py-2 rounded-md text-lg font-mono font-medium focuse:outline-1 focus:outline-[#CCCCCC]"
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
              className="w-full flex flex-row justify-center items-center border-2 border-[#CCCCCC] bg-white px-4 py-2 rounded-md text-lg font-mono font-medium focuse:outline-1 focus:outline-[#CCCCCC]"
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
              className="w-full flex flex-row justify-center items-center border-2 border-[#CCCCCC] bg-white px-4 py-2 rounded-md text-lg font-mono font-medium focuse:outline-1 focus:outline-[#CCCCCC]"
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
            className="w-full my-6 bg-[#E94560] rounded-md py-2 font-mono font-semibold text-lg text-white active:text-[#333333] active:bg-white"
          >
            Create you account
          </button>
        </div>
      </div>
    </div>
  );
}
