import { IconButton } from "@material-tailwind/react";
import React, { useId } from "react";

const Note = (note, index) => {

  console.log("Note in Note: ", note);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const handleNoteDeleteButtonClick = (event) => {
    console.log("Note to delete: ", event);
  };

  return (
    // <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div className="rounded m-5" id={`${index}`} >
      <div className="w-64 h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400">
        <div className="">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={handleNoteDeleteButtonClick}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              id={index}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3 flex justify-between m-2">
            {note.note.title}
          </h4>
          <p className="text-gray-800 dark:text-gray-100 text-sm m-2">
            {note.note.content}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 m-2">
            <p className="text-sm">{`${year}${" "}${
              month < 10 ? `0${month}` : `${month}`
            }${" "}${date}`}</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Note;
