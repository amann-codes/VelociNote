import React from "react";

interface AddMemebersProps {
  close: () => void;
}

export default function AddMembers({ close }: AddMemebersProps) {
  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col gap-y-6 justify-center items-center bg-black bg-opacity-50">
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
        <div>
          <p className="text-3xl font-bold mt-3">Invite Members</p>
          <form className="flex flex-col mt-5">
            <label className="text-lg font-semibold">Email addresses</label>
            <p className="text-sm font-medium text-gray-500 mb-4">
              Enter or paste one or more than one email addresses separated by
              space
            </p>
            <textarea className="focus:outline-none resize-none p-3 rounded-md border-[1px] border-gray-300 h-[100px] text-sm" />
          </form>
          <div className="flex justify-end">
            <button onClick={close} className="bg-blue-500 text-white text-lg py-1 px-4 font-medium rounded-lg mt-3 w-max">
              Send Invitations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
