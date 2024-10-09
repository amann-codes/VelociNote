"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
export default function Appbar() {
  const router = useRouter();
  return (
    <div className="bg-[#0F3460]">
      <div className="max-w-[1200px] h-[70px] flex flex-row justify-between items-center mx-auto">
        <p className="text-white font-bold font-mono text-3xl border-dashed border-2 py-2 px-4">
          VelociNote
        </p>
        <div className="flex flex-row justify-end gap-x-4">
          <button
            onClick={() => router.push("/signup")}
            className="w-max h-max border-2 border-[#E06B3C] rounded-md px-4 py-2 font-mono text-lg font-bold text-white bg-[#FF7F50]"
          >
            Signup
          </button>
          <button
            onClick={() => signIn()}
            className="w-max h-max border-2 border-[#E06B3C] rounded-md px-4 py-2 font-mono text-lg font-bold text-white bg-[#FF7F50]"
          >
            Login
          </button>
          <button
            onClick={() => signOut()}
            className="w-max h-max border-2 border-[#E06B3C] rounded-md px-4 py-2 font-mono text-lg font-bold text-white bg-[#FF7F50]"
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
}
