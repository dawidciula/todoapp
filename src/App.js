import React, { useState } from "react";
import Header from "./components/Header";
import FormField from "./components/FormField";
import DisplayNote from "./components/DisplayNote";
import FormButton from "./components/FormButton";

function App() {
    const [noteContent, setNoteContent] = useState("");

    const handleNoteChange = (event) => {
        setNoteContent(event.target.value);
    };

    const handleNoteButtonClick = () => {
        if (noteContent.trim() !== "") {
            console.log("Wyświetl notatkę:", noteContent);
        } else {
            console.log("Treść notatki jest pusta!");
        }
    };

    return (
        <div>
            <div>
                <Header whichHeader="h1" content="Witaj w aplikacji ToDoList!" />
                <Header whichHeader="h3" content="Stwórz swoją własną notatkę!" />
            </div>
            <div>
                <FormField
                    label="Treść notatki:"
                    value={noteContent}
                    onChange={handleNoteChange}
                />
                <FormButton
                    value="Notatka dzienna"
                    onClick={handleNoteButtonClick}
                />
                <FormButton value="Notatka jednorazowa" />
            </div>
            <div>
                <DisplayNote content={noteContent} />
            </div>
        </div>
    );
}

export default App;
