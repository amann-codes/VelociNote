"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async () => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: "/",
      });
      if(res?.error){
        console.log(res.error)
      }
      else{
        router.push(res?.url || " ")
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative bg-[#F0F4F8]">
      <div className="w-max h-max">
        <div className="flex flex-col justify-center items-center border-2 border-[#CCCCCC] p-7 rounded-xl">
          <p className="text-center text-black font-bold text-3xl mt-3 font-mono">
            Welcome Back
          </p>
          <p className="text-center text-black font-bold text-2xl mt-6 font-mono">
            Sign in into VelociNote
          </p>

          <div className="w-full flex flex-row justify-between">
            <button
              onClick={async () => {
                await signIn("google", { callbackUrl: "/" });
              }}
              className="w-full mx-3 flex flex-row justify-center items-center border-2 border-[#CCCCCC] shadow-md bg-white px-6 py-2 rounded-md text-xl font-mono font-semibold mt-5"
            >
              <img
                src="https://authjs.dev/img/providers/google.svg"
                className="w-[25px] mr-3"
              ></img>
              Google
            </button>
            <button
              onClick={async () => {
                await signIn("github", { callbackUrl: "/" });
              }}
              className="w-full mx-3 flex flex-row justify-center items-center border-2 border-[#CCCCCC] shadow-md bg-white px-6 py-2 rounded-md text-xl font-mono font-semibold mt-5"
            >
              <img
                src="https://authjs.dev/img/providers/github.svg"
                className="w-[25px] mr-3"
              ></img>
              Github
            </button>
          </div>

          <div className="flex items-center justify-center my-5">
            <hr className="w-48 h-[2px] bg-gray-300 border-0 rounded" />
            <span className="px-4 text-lg font-medium text-gray-900">Or</span>
            <hr className="w-48 h-[2px] bg-gray-300 border-0 rounded" />
          </div>
          <form className="flex flex-col w-full gap-y-3">
            <label className="font-mono text-xl font-semibold">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="user12@sdf.com"
              className="focuse:outline-1 focus:outline-[#CCCCCC] text-lg font-mono rounded-md bg-[#F9F9F9] px-4 py-3 text-black placeholder:text-[#333333] placeholder:font-mono border-2 border-[#CCCCCC]"
            ></input>
            <label className="font-mono text-xl font-semibold">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              placeholder="Fdfr@134$$"
              className="focuse:outline-1 focus:outline-[#CCCCCC] text-lg font-mono rounded-md bg-[#F9F9F9] px-4 py-3 text-black placeholder:text-[#333333] placeholder:font-mono border-2 border-[#CCCCCC]"
            ></input>
          </form>
          <button
            onClick={handlesubmit}
            className="w-full my-5 bg-[#E94560] rounded-md py-2 font-mono font-semibold text-lg text-white active:text-[#333333] active:bg-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
