"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const name = session?.user?.name;
    event.currentTarget.src = `https://craftypixels.com/placeholder-image/200x200/0f6fa3/fff&text=${getInitials(
      name || ""
    )}`;
  };

  return (
    <div className="flex flex-row items-center gap-x-4">
      {isOpen ? (
        <svg
          onClick={() => setIsOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="White"
          className="size-10 border-2 border-white rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ) : (
        <img
          onClick={() => setIsOpen((prev) => !prev)}
          src={session?.user?.image || ""}
          onError={handleImageError}
          className="cursor-pointer size-10 rounded-full"
        />
      )}

      {isOpen && (
        <div className="flex flex-col gap-y-3 absolute z-30 -translate-x-full translate-y-[70%] bg-slate-800 p-6 rounded-md">
          <div className="flex flex-row justify-start gap-x-3 items-center w-max">
            <img
              src={session?.user?.image || ""}
              onError={handleImageError}
              className="size-10 rounded-full"
            />
            <p className="text-xl font-semibold text-white ">
              {session?.user?.name}
            </p>
          </div>
          <p className="text-lg font-medium text-white">
            {session?.user?.email}
          </p>
          <button
            onClick={() => signOut()}
            className="p-2 bg-black text-white rounded-md border"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
