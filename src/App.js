import React, { useEffect, useId, useState } from "react";
import Header from "./components/Header";
import FormField from "./components/FormField";
import DisplayNote from "./components/DisplayNote";
import FormButton from "./components/FormButton";
import Note from "./components/Note";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Select,
  Option,
  Textarea,
  Input,
} from "@material-tailwind/react";
import NotesMainView from "./components/NotesMainView";

function App() {
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [dailyNotes, setDailyNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteImportant, setNoteImportant] = useState("");
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value);
    console.log("noteContent: ", noteContent);
  };

  const handleDailyNoteButtonClick = () => {
    const newDailyNote = {
      noteContent: noteContent,
      noteTitle: noteTitle,
      noteImportant: noteImportant,
    };
    setDailyNotes([...dailyNotes, newDailyNote]);
    // if (noteContent.trim() !== "") {
    //   console.log("Wyświetl notatkę:", noteContent);
    // } else {
    //   console.log("Treść notatki jest pusta!");
    // }
  };

  const handleNoteButtonClick = () => {
    const newNote = {
      title: noteTitle,
      content: noteContent,
      important: noteImportant,
    };
    setNotes([...notes, newNote]);
  };

  const handleTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleImportancySelectChange = (event) => {
    setNoteImportant(event);
  };

  useEffect(() => {
    console.log("dailyNotes: ", dailyNotes);
  }, [dailyNotes, notes]);

  return (
    <div className="m-5">
      <Accordion open={open === 1} className="mb-20">
        <AccordionHeader onClick={() => handleOpen(1)}>
          Witaj w aplikacji ToDoList!{" "}
        </AccordionHeader>
        <AccordionBody>
          TodoApp to intuicyjna i wszechstronna aplikacja do zarządzania
          zadaniami, która pomoże Ci efektywnie organizować swoje obowiązki i
          osiągać cele. Dzięki prostemu interfejsowi użytkownika możesz łatwo
          dodawać, edytować i usuwać zadania, tworzyć listy zadań, ustawiać
          terminy wykonania oraz priorytetyzować swoje obowiązki.
        </AccordionBody>
      </Accordion>
      {/* <div className="">
        <Header whichHeader="h1" content="Witaj w aplikacji ToDoList!" />
        <Header whichHeader="h3" content="Stwórz swoją własną notatkę!" />
      </div> */}
      <div className="mb-10 w-96">
        <div className="w-96">
          <Input label="Tytuł notatki" onChange={handleTitle} crossOrigin={undefined} />
        </div>
        <FormField
          label="Treść notatki:"
          value={noteContent}
          onChange={handleNoteChange}
        />
        <Select
          label="Select Version"
          className="w-96"
          onChange={handleImportancySelectChange}
        >
          <Option value="Trzeba zrobić!">Trzeba zrobić!</Option>
          <Option value="Można zrobić">Można zrobić</Option>
          <Option value="Fajnie zrobić">Fajnie zrobić</Option>
        </Select>
      </div>
      <div className="flex w-96 mb-5">
        <FormButton
          value="Notatka dzienna"
          onClick={handleDailyNoteButtonClick}
          inputValue={undefined}
        />
        <FormButton
          value="Notatka jednorazowa"
          onClick={handleNoteButtonClick}
          inputValue={undefined}
        />
      </div>
      <div className="w-96"></div>
      <NotesMainView
        notes={notes}
        setNotes={setNotes}
        daily={dailyNotes}
        setDaily={setDailyNotes}
      />
      {/* <div>
        <DisplayNote content={noteContent} />
      </div> */}
      {/* <Note /> */}
    </div>
  );
}

export default App;
