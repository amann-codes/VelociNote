import React from "react";

interface CreateOrgProps {
  close: () => void;
}

export default function CreateOrg({ close }: CreateOrgProps) {
  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col gap-y-6 justify-center items-center bg-black bg-opacity-50">
      <svg
        onClick={close}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="size-12 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div className="w-[400px] h-max bg-white rounded-lg shadow-lg p-4">
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
              type="text"
              className="border-[1px] focus:outline-none border-gray-700 rounded-md p-2"
            />
          </form>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white text-lg py-1 px-4 font-semibold rounded-lg mt-3 w-max">
              Create Organization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
