import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNotes] = useState([]);

  function deleteItem(id) {
    // console.log(id);
    addNotes((prevNotes) => {
      return prevNotes.filter((prevNotes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} />
      {/* map through the notes */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
