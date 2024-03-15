import React from "react";
import ReactCountdownClock from "react-countdown-clock";
import Countdown from "react-countdown-now";

const dailyNotes = (note) => {
  return (
    // <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div className="rounded m-5">
      <div className="w-64 h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
        <div>
          <Countdown date={Date.now() + 86400000}>
            {/* <Completionist /> */}
          </Countdown>
          {/* <ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={40}
                     onComplete={onComplete} /> */}
          <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
            {note.note.title}
          </h4>
          <p className="text-gray-800 dark:text-gray-100 text-sm">
            {note.note.content}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between text-gray-800 dark:text-gray-100"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default dailyNotes;
