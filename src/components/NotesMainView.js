import React from "react";
import Note from "./Note";
import { Typography } from "@material-tailwind/react";
import DailyNote from "./DailyNote";

const NotesMainView = (notes, setNotes, daily, setDaily) => {
  console.log("notes in NOTESMAINVIEW: ", notes);

  return (
    <div>
      <Typography variant="h2">Notatki jednorazowe</Typography>
      <div className="flex flex-wrap">
        {notes.notes.length > 0 ? 
          notes.notes.map((note) => {
            return <Note key={note.id} note={note} />;
          })
         : (
          <div>Brak notatek</div>
        )}
      </div>
      <Typography variant="h2">Notatki dzienne</Typography>
      <div className="flex flex-wrap">
      {notes.daily.length > 0 ? 
          notes.daily.map((note) => {
            return <DailyNote key={note.id} note={note} />;
          })
         : (
          <div>Brak notatek</div>
        )}      </div>
    </div>
  );
};

export default NotesMainView;
