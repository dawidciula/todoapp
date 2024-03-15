import React from "react";
import Note from "./Note";
import { Typography } from "@material-tailwind/react";
import DailyNote from "./DailyNote";
import { v4 as uuidv4 } from 'uuid';


const NotesMainView = (notes, setNotes, daily, setDaily) => {
  console.log("notes in NOTESMAINVIEW: ", notes);

  return (
    <div>
      <Typography variant="h2">Notatki jednorazowe</Typography>
      <div className="flex flex-wrap">
        {notes.notes.length > 0 ? (
          notes.notes.map((note, index) => {
            console.log("index: ", index);
            return <Note note={note} index={index} />;
          })
        ) : (
          <div>Brak notatek</div>
        )}
      </div>
      <Typography variant="h2">Notatki dzienne</Typography>
      <div className="flex flex-wrap">
        {notes.daily.length > 0 ? (
          notes.daily.map((note, index) => {
            return <DailyNote id={index} key={index} note={note} />;
          })
        ) : (
          <div>Brak notatek</div>
        )}{" "}
      </div>
    </div>
  );
};

export default NotesMainView;
