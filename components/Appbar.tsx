"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
export default function Appbar() {
  return (
    <div className="bg-lime-500">
      <div className="max-w-[1200px] h-[70px] flex flex-row justify-between items-center mx-auto">
        <p className="text-white font-bold font-mono text-3xl border-dashed border-2 py-2 px-4">
          VelociNote
        </p>
        <div className="flex flex-row justify-end gap-x-4">
          <button className="w-max h-max border-2 rounded-md px-4 py-2 font-mono text-lg font-bold text-white">
            Signup
          </button>
          <button
            onClick={() => signIn()}
            className="w-max h-max border-2 rounded-md px-4 py-2 font-mono text-lg font-bold text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
