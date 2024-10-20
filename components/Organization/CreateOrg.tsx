import React, { useState } from "react";

interface CreateOrgProps {
  close: () => void;
  next: () => void;
}

export default function CreateOrg({ close, next }: CreateOrgProps) {
  const [name, setName] = useState("");
  const handlesubmit = async () => {
    const res = await fetch("/api/organization", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
    console.log(res);
  };
  return (
    <div className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative w-[400px] h-max bg-white rounded-lg shadow-lg p-7">
        <svg
          onClick={close}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="gray"
          className="size-6 cursor-pointer absolute top-3 right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <div className="flex flex-col">
          <p className="text-center text-3xl font-semibold mb-6">
            Create Organization
          </p>
          <div className="flex flex-row items-center gap-x-3 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-11 bg-slate-300 rounded-lg p-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <div className="flex flex-col justify-start">
              <p className="text-lg text-black font-medium">
                Oragnizaiton icon
              </p>
              <p className="text-sm text-blue-900 font-medium">Upload image</p>
            </div>
          </div>
          <form className="flex flex-col gap-y-3">
            <label className="text-start text-lg font-medium text-black">
              Organization Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="border-[1px] focus:outline-none border-gray-700 rounded-md p-2"
            />
          </form>
          <div className="flex justify-end">
            <button
              onClick={() => {
                handlesubmit(), next();
              }}
              className="bg-blue-500 text-white text-lg py-1 px-4 font-medium rounded-lg mt-3 w-max"
            >
              Create Organization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
